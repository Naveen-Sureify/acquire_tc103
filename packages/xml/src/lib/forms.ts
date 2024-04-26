import * as fs from 'fs';
import { OLI_LU } from '../types';
import * as lookups from './lookups';
import * as files from './files';

export type Serializable = {
  serialize: (formType: string) => Promise<string> | string;
};

export interface FormInstanceCTOR {
  //BrightHouse Fixture-1
  id: string;
  RelatedObjectID: string;
  ProviderFormNumber: string;
  FormName: string;
  FileName: string;
  VendorCode: string;
  ExtensionCode: string;
  AttachmentBasicType: string;
  AttachmentType: string;
  ReqCode: string;
  filePath: string;
  fileFormat: BufferEncoding;

  //NavyMutual Fixture-5
  QuestionNumber: string;
  ResponseData: string;
}

export interface ImageInfoCTOR {
  imageGUID: string;
  filePath: string;
  fileFormat: BufferEncoding;
}

export class FormInstance implements Serializable {
  //BrightHouse Fixture-1
  public id!: string;
  public RelatedObjectID!: string;
  public ProviderFormNumber!: string;
  public FormName!: string;
  public FileName!: string;
  public VendorCode!: string;
  public ExtensionCode: string;
  public AttachmentBasicType: string;
  public AttachmentType: string;
  public ReqCode: string;
  public filePath: string;
  public fileFormat: BufferEncoding = 'base64';

  public ImageInfo: ImageInfo;

  //NavyMutual Fixture-5
  public QuestionNumber: string;
  public ResponseData: string;

  constructor(props: FormInstanceCTOR) {
    this.id = props.id;
    this.RelatedObjectID = props.RelatedObjectID;
    this.ProviderFormNumber = props.ProviderFormNumber;
    this.FormName = props.FormName;
    this.FileName = props.FileName;
    this.VendorCode = props.VendorCode;
    this.ExtensionCode = props.ExtensionCode;
    this.AttachmentBasicType = props.AttachmentBasicType;
    this.AttachmentType = props.AttachmentType;
    this.ReqCode = props.ReqCode;
    this.filePath = props.filePath;

    this.ImageInfo = new ImageInfo({
      imageGUID: this.FileName,
      filePath: this.filePath,
      fileFormat: this.fileFormat,
    });

    this.QuestionNumber = props.QuestionNumber;
    this.ResponseData = props.ResponseData;
  }

  async serialize(formType: string): Promise<string> {
    //fixture-1 and fixture-5 together is default
    return `
      <${formType} ${this.id ? 'id="' + this.id + '"' : ''} ${
      this.RelatedObjectID
        ? 'RelatedObjectID="' + this.RelatedObjectID + '"'
        : ''
    }>
        ${this.FormName ? `<FormName>${this.FormName}</FormName>` : ''}
        ${
          this.ProviderFormNumber
            ? `<ProviderFormNumber>${this.ProviderFormNumber}</ProviderFormNumber>`
            : ''
        }
        ${
          this.AttachmentBasicType || this.AttachmentType
            ? `<Attachment>
            ${
              this.AttachmentBasicType
                ? `<AttachmentBasicType tc="${await lookups.lookup(
                    OLI_LU.BASICATTACHMENTTYPE,
                    { tc: this.AttachmentBasicType }
                  ).tc}">
            ${await lookups.lookup(OLI_LU.BASICATTACHMENTTYPE, {
              tc: this.AttachmentBasicType,
            }).value}
            </AttachmentBasicType>`
                : ''
            }
            ${
              this.AttachmentType
                ? `<AttachmentType tc="${await lookups.lookup(
                    OLI_LU.ATTACHMENTTYPE,
                    {
                      tc: this.AttachmentType,
                    }
                  ).tc}">
            ${await lookups.lookup(OLI_LU.ATTACHMENTTYPE, {
              tc: this.AttachmentType,
            }).value}
            </AttachmentType>`
                : ''
            }
          ${
            this.ExtensionCode
              ? `<OLifEExtension ExtensionCode="${
                  this.ExtensionCode
                }" VendorCode="${this.VendorCode}">
            <AttachmentExtension>
              <FileName>${this.FileName}</FileName>
              ${
                this.ReqCode
                  ? `<ReqCode tc="${await lookups.lookup(OLI_LU.REQCODE, {
                      tc: this.ReqCode,
                    }).tc}">
                    ${await lookups.lookup(OLI_LU.REQCODE, { tc: this.ReqCode })
                      .value}
                  </ReqCode>`
                  : ''
              }
            </AttachmentExtension>
          </OLifEExtension>`
              : ''
          }
        </Attachment>`
            : ''
        }
        ${
          this.QuestionNumber
            ? `<QuestionNumber>${this.QuestionNumber}</QuestionNumber>`
            : ''
        }
        ${
          this.ResponseData
            ? `<ResponseData>${this.ResponseData}</ResponseData>`
            : ''
        }
      </${formType}>
    `;
  }
}

export class ImageInfo implements Serializable {
  imageGUID: string;
  filePath: string;
  fileFormat: BufferEncoding = 'base64';

  constructor(props: ImageInfoCTOR) {
    this.imageGUID = props.imageGUID;
    this.filePath = props.filePath;
    this.fileFormat = props.fileFormat || 'base64';
  }

  async serialize(): Promise<string> {
    return `
      <imageInfo>
        <imageGUID>${this.imageGUID}</imageGUID>
        <image>
          ${
            this.filePath
              ? await files.inject(this.filePath, this.fileFormat)
              : ''
          }
        </image>
      </imageInfo>
    `;
  }
}

export const inject = async (
  filePath: string,
  format: BufferEncoding,
  type: ''
): Promise<string | null> => {
  return fs.readFileSync(filePath).toString(format);
};
