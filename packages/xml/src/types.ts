export * from './acord.types';
import { TypeCodeKey } from './acord.types';

export enum InjectFormat {
  base64 = 'base64',
}

export enum WriteDestination {
  S3 = 'S3',
  STDOUT = 'STDOUT',
}

export enum ApplicationSchema {
  TC103 = 'TC103',
  RAS = 'RAS',
  SUREIFY = 'SUREIFY',
}

export enum ApplicationFormat {
  XML = 'XML',
  JSON = 'JSON',
}

export enum ApplicationTemplate {
  TC103 = 'TC103',
  AllState = 'AllState',
  NW = 'NW',
}

export enum ApplicationTransmissionFormat {
  HTTPS,
}

export type ApplicationRasInputJson = {
  sureify: {
    products: [
      {
        id: string;
        text: string;
      }
    ];
    questionnaire: {
      questions: Question[];
    };
    completed: boolean;
  };
};

export type Answer = string | number | string[] | number[] | object[] | any;

export type LookupResult = {
  tc: string;
  key: string;
  value: string;
  definition: string;
};

export enum LookupDataSetField {
  tc = 'tc',
  key = 'key',
  value = 'value',
  definition = 'definition',
}

export type LookupValue = {
  [key in LookupDataSetField]?: string;
};

// enum EmailStatus {
//   Read = 'READ',
//   Unread = 'UNREAD',
//   Draft = 'DRAFT',
// }

export type QuestionAnswerPair = {
  uuid: string;
  question_id: string;
  acord_id?: string;
  sureify_id?: string;
  acord?: { id: string; nodes?: any };
  answer: any;
  response: Response;
  question_text: string;
  question_type: QuestionType;
  display_type: DisplayType;
};

export type Response = any;
export type ResponseOption = any;
export enum QuestionType {
  text = 'text',
  number = 'number',
  date = 'date',
  group = 'group',
  label = 'label',
  singleselection = 'singleselection',
  multiselection = 'multiselection',
}
export enum DisplayType {
  text = 'text',
  textarea = 'textarea',
  number = 'number',
  date = 'date',
  range = 'range',
  radio = 'radio',
  radio_button = 'radio_button',
  dropdown = 'dropdown',
  dropdown_search = 'dropdown_search',
  checkbox = 'checkbox',
  breadcrumb = 'breadcrumb',
  questions_group = 'questions_group',
  list = 'list',
  label = 'label',
}

export enum QuestionKeys {
  uuid = 'uuid',
  acord_id = 'acord_id',
  question_id = 'question_id',
  question_text = 'question_text',
  response = 'response',
  display_type = 'display_type',
  question_type = 'question_type',
}

export type Question = {
  uuid: string;
  acord_id: string;
  sureify_id: string;
  acord?: { id: string; nodes?: any };
  question_id: string;
  question_type: QuestionType;
  display_type: DisplayType;
  orientation: string;
  question_text: string;
  index: number;
  response: Response;
  sequence_number: 1;
  is_reviewable: boolean;
  is_editable: boolean;
  is_edit_icon_visible: boolean;
  is_hidden: boolean;
  presentation_type: string;
  validations: {
    placeholder_text: {
      hide: boolean;
    };
    required: {
      value: boolean;
    };
  };
  response_options: ResponseOption[];
  parent_question_answer: any[];
  child_questions: boolean;
  child_questions_on: any[];
  question_status: string;
  question_status_message: string;
  hint_text: string;
  sureify_meta: {
    source_id: 1;
  };
  questions: Question[];
  original_questions?: Question[];
  restore_questions?: Question[];
};

export interface Lookup {
  serialize(): Promise<string>;
}

export type LookupOption = {
  name: string;
  key: TypeCodeKey;
  code: number;
  description: string;
};

export enum OLI_LU {
  GENDER = 'GENDER',
  PROCESSINGINSTRUCTION = 'PROCESSINGINSTRUCTION',
  ISSUETYPE = 'ISSUETYPE',
  PARTY = 'PARTY',
  REPLACETYPE = 'REPLACETYPE',
  NLGPERIOD = 'NLGPERIOD',
  QUALPLANTYPE = 'QUALPLANTYPE',
  LIFECOVSTATUS = 'LIFECOVSTATUS',
  TOBACCOPREMIMUMBASIS = 'TOBACCOPREMIMUMBASIS',
  INDICATORCODE = 'INDICATORCODE',
  LIVESTYPE = 'LIVESTYPE',
  DEATHBENEFITOPTTYPE = 'DEATHBENEFITOPTTYPE',
  LIFECOVOPTTYPECODE = 'LIFECOVOPTTYPECODE',
  LIFEPARTICIPANTROLECODE = 'LIFEPARTICIPANTROLECODE',
  DEFLIFEINSMETHOD = 'DEFLIFEINSMETHOD',
  INTERNAL1035 = 'INTERNAL1035',
  TRANSTYPE = 'TRANSTYPE',
  TRANSMODE = 'TRANSMODE',
  PAYMENTMODE = 'PAYMENTMODE',
  PAYMENTMETHOD = 'PAYMENTMETHOD',
  HOLDINGTYPE = 'HOLDINGTYPE',
  LINEOFBUSINESS = 'LINEOFBUSINESS',
  PRODUCTTYPE = 'PRODUCTTYPE',
  APPLICATIONTYPE = 'APPLICATIONTYPE',
  APPLICATIONJURISDICTION = 'APPLICATIONJURISDICTION',
  FORMALAPPIND = 'FORMALAPPIND',
  SUBMISSIONTYPE = 'SUBMISSIONTYPE',
  REPLACEMENTIND = 'REPLACEMENTIND',
  SIGNATUREROLECODE = 'SIGNATUREROLECODE',
  ARRTYPE = 'ARRTYPE',
  TRANSFERAMTTYPE = 'TRANSFERAMTTYPE',
  BASICATTACHMENTTYPE = 'BASICATTACHMENTTYPE',
  ATTACHMENTTYPE = 'ATTACHMENTTYPE',
  REQCODE = 'REQCODE',
  UNDERWRITINGDECISIONMRAS = 'UNDERWRITINGDECISIONMRAS',
  CITIZENSHIP = 'CITIZENSHIP',
  BIRTHJURISDICTIONTC = 'BIRTHJURISDICTIONTC',
  MARSTAT = 'MARSTAT',
  GOVTIDTC = 'GOVTIDTC',
  RELATIONDESCRIPTION = 'RELATIONDESCRIPTION',
  ADDRESSSTATETC = 'ADDRESSSTATETC',
  BENEFICIARYDESIGNATION = 'BENEFICIARYDESIGNATION',
  PARTYTYPECODE = 'PARTYTYPECODE',
  ORIGINATINGOBJECTTYPE = 'ORIGINATINGOBJECTTYPE',
  RELATEDOBJECTTYPE = 'RELATEDOBJECTTYPE',
  RELATIONROLECODE = 'RELATIONROLECODE',
  ORGFORM = 'ORGFORM',
  MILITARYORGANIZATIONTYPE = 'MILITARYORGANIZATIONTYPE',
  MILITARYSTATUS = 'MILITARYSTATUS',
  MECIND = 'MECIND',
  DISTRIBUTIONCHANNEL = 'DISTRIBUTIONCHANNEL',
  BACKSTAGETYPE = 'BACKSTAGETYPE',
  ARRMODE = 'ARRMODE',
  PHYSICIANSPECIALITY = 'PHYSICIANSPECIALITY',
  DISTCHAN = 'DISTCHAN',
  ADDRESSCOUNTRYTC = 'ADDRESSCOUNTRYTC',
  DRIVERSLICENSESTATE = 'DRIVERSLICENSESTATE',
  VIPIND = 'VIPIND',
  HOLDINGSTATUS = 'HOLDINGSTATUS',
  ADDRESSTYPECODE = 'ADDRESSTYPECODE',
  BACKDATETYPE = 'BACKDATETYPE',
  BANKACCTYPE = 'BANKACCTYPE',
  RATECLASS = 'RATECLASS',
  DRIVERSLICENSESTATENW = "DRIVERSLICENSESTATENW",
  PHONETYPE = "PHONETYPE",
}
