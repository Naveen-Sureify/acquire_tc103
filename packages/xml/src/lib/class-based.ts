/* eslint-disable no-prototype-builtins */
// To parse this data:
//
//   import { Convert, Welcome9 } from "./file";
//
//   const xml = Convert.toXML(json);
//
// These functions will throw an error if the JSON doesn't
// match the expected interface, even if the JSON is valid.

export interface Welcome9 {
  TXLife: TXLife;
}

export interface TXLife {
  UserAuthRequest: UserAuthRequest;
  TXLifeRequest: TXLifeRequest;
}

export interface TXLifeRequest {
  TransRefGUID: string;
  TransType: string;
  TransExeDate: Date;
  TransExeTime: string;
  TransMode: string;
  OLifE: OLIFE;
}

export interface OLIFE {
  Grouping: Grouping;
  SourceInfo: SourceInfo;
  Holding: Holding;
  Party: Party[];
  Relation: Relation[];
  FormInstance: FormInstance[];
}

export interface FormInstance {
  FormResponse?: FormResponse[];
  OriginalInputMode?: string;
  FormInstanceCategory?: string;
  Attachment?: Attachment;
}

export interface Attachment {
  AttachmentBasicType: string;
  Description: string;
  AttachmentData: string;
  AttachmentType: string;
  MimeTypeTC: string;
  TransferEncodingTypeTC: string;
  AttachmentLocation: string;
  SignatureInfo: AttachmentSignatureInfo;
}

export interface AttachmentSignatureInfo {
  SignatureOK: string;
}

export interface FormResponse {
  QuestionNumber: string;
  ResponseData: NoDriversLicenseInd | number;
}

export enum NoDriversLicenseInd {
  A = 'A',
  Abc = 'abc',
  C = 'C',
  False = 'False',
  No = 'No',
  Yes = 'Yes',
}

export interface Grouping {
  Household: Household;
}

export interface Household {
  HouseholdKey: number;
}

export interface Holding {
  HoldingSysKey: string[];
  HoldingTypeCode: string;
  HoldingStatus: string;
  Policy: Policy;
  Arrangement: Arrangement;
}

export interface Arrangement {
  ProductCode: string;
  ArrMode: string;
  ArrType: string;
  ModalAmt: number;
  PaymentMethod: string;
}

export interface Policy {
  PolNumber: number;
  LineOfBusiness: string;
  ProductType: string;
  ProductCode: number;
  CarrierCode: string;
  PlanName: string;
  PolicyStatus: string;
  IssueNation: string;
  Jurisdiction: string;
  EffDate: Date;
  PaymentMode: string;
  PaymentAmt: number;
  PaymentMethod: string;
  Life: Life;
  ApplicationInfo: ApplicationInfo;
}

export interface ApplicationInfo {
  HOAssignedAppNumber: string;
  TrackingID: string;
  ApplicationType: string;
  BackDateType: string;
  ReqPolicyDeliveryMethod: string;
  SignatureInfo: SignatureInfoElement[];
  OLifEExtension: ApplicationInfoOLIFEExtension;
}

export interface ApplicationInfoOLIFEExtension {
  AgeAndAmount: number;
  OrderType: string;
  PensionersMonthly: AutomaticPremiumPayment;
  AutomaticPremiumPayment: AutomaticPremiumPayment;
  NameID: string;
  EmployeeInd: string;
  AdditionalInfo_ConcurrentApplicationYesNo: NoDriversLicenseInd;
  PIMED_VERIFY_ChangedYesNo: NoDriversLicenseInd;
  StartedInDTC: NoDriversLicenseInd;
}

export interface AutomaticPremiumPayment {
  AutomaticPremiumPayment: NoDriversLicenseInd;
}

export interface SignatureInfoElement {
  SignatureRoleCode: string;
  SignatureDate?: Date;
  SignatureCity?: string;
  SignatureState?: string;
  SubmissionType: string;
  SignatureText?: string;
  ElectronicAuthenticationType?: string;
}

export interface Life {
  InitialPremAmt: number;
  FaceAmt: number;
  Coverage: Coverage[];
}

export interface Coverage {
  PlanName: string;
  ProductCode: number | string;
  IndicatorCode: string;
  DurationDesign?: number;
  CurrentAmt: number | string;
  InitCovAmt?: number;
  LifeParticipant?: LifeParticipant[];
}

export interface LifeParticipant {
  ParticipantName?: string;
  LifeParticipantRoleCode: string;
  PermTableRating?: string;
  UnderwritingClass?: string;
  BeneficiaryPercentDistribution?: number;
  DistributionOption?: string;
  BeneficiaryDesignation?: string;
}

export interface Party {
  PartyTypeCode: string;
  FullName?: string;
  PartySysKey?: number;
  GovtID?: number;
  GovtIDTC?: string;
  Person?: Person;
  Address?: Address;
  Phone?: Phone;
  EMailAddress?: EMailAddress;
  Employment?: Employment;
  PartyKey?: string;
  ResidenceState?: string;
  Producer?: Producer;
}

export interface Address {
  AddressTypeCode: string;
  Line1?: string;
  Line2?: string;
  City?: string;
  AddressState?: string;
  Zip?: number;
  AddressCountryTC?: string;
  AddressStateTC?: string;
}

export interface EMailAddress {
  AddrLine: string;
  PrefEMailAddr?: string;
}

export interface Employment {
  OccupClass: string;
}

export interface Person {
  FirstName: string;
  MiddleName?: string;
  LastName: string;
  Suffix?: string;
  Gender?: string;
  BirthDate?: string;
  Age?: number;
  Citizenship?: string;
  Height2?: Eight2;
  Weight2?: Eight2;
  DriversLicenseNum?: string;
  NoDriversLicenseInd?: NoDriversLicenseInd;
  DriversLicenseState?: string;
  BirthCountry?: string;
  BirthJurisdictionTC?: string;
  ImmigrationStatus?: string;
}

export interface Eight2 {
  MeasureUnits: string;
  MeasureValue: number;
}

export interface Phone {
  PhoneTypeCode: string;
  AreaCode?: number;
  DialNumber?: number;
  Ext?: number;
}

export interface Producer {
  CarrierAppointment: CarrierAppointment;
  OLifEExtension: ProducerOLIFEExtension;
}

export interface CarrierAppointment {
  CompanyProducerID: string;
}

export interface ProducerOLIFEExtension {
  UserName: string;
}

export interface Relation {
  OriginatingObjectType: OriginatingObjectType;
  RelatedObjectType: RelatedObjectType;
  RelationRoleCode: string;
  InterestPercent?: number;
  RelationDescription?: string;
}

export enum OriginatingObjectType {
  Holding = 'Holding',
  Party = 'Party',
}

export enum RelatedObjectType {
  FormInstance = 'Form Instance',
  Party = 'Party',
}

export interface SourceInfo {
  CreationDate: Date;
  CreationTime: string;
  SourceInfoName: string;
}

export interface UserAuthRequest {
  UserLoginName: string;
  UserPswd: UserPswd;
  VendorApp: VendorApp;
}

export interface UserPswd {
  CryptType: string;
  Pswd: string;
}

export interface VendorApp {
  VendorName: string;
  AppName: string;
}

// Converts JSON strings to/from your types
// and asserts the results of JSON.parse at runtime
export class Convert {
  public static toXML(json: string): Welcome9 {
    return cast(JSON.parse(json), r('Welcome9'));
  }

  public static welcome9ToJson(value: Welcome9): string {
    return JSON.stringify(uncast(value, r('Welcome9')), null, 2);
  }
}

function invalidValue(typ: any, val: any, key: any = ''): never {
  if (key) {
    throw Error(
      `Invalid value for key "${key}". Expected type ${JSON.stringify(
        typ
      )} but got ${JSON.stringify(val)}`
    );
  }
  throw Error(
    `Invalid value ${JSON.stringify(val)} for type ${JSON.stringify(typ)}`
  );
}

function jsonToJSProps(typ: any): any {
  if (typ.jsonToJS === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.json] = { key: p.js, typ: p.typ }));
    typ.jsonToJS = map;
  }
  return typ.jsonToJS;
}

function jsToJSONProps(typ: any): any {
  if (typ.jsToJSON === undefined) {
    const map: any = {};
    typ.props.forEach((p: any) => (map[p.js] = { key: p.json, typ: p.typ }));
    typ.jsToJSON = map;
  }
  return typ.jsToJSON;
}

function transform(val: any, typ: any, getProps: any, key: any = ''): any {
  function transformPrimitive(typ: string, val: any): any {
    if (typeof typ === typeof val) return val;
    return invalidValue(typ, val, key);
  }

  function transformUnion(typs: any[], val: any): any {
    // val must validate against one typ in typs
    const l = typs.length;
    for (let i = 0; i < l; i++) {
      const typ = typs[i];
      try {
        return transform(val, typ, getProps);
      } catch (_) {} // eslint-disable-line no-empty
    }
    return invalidValue(typs, val);
  }

  function transformEnum(cases: string[], val: any): any {
    if (cases.indexOf(val) !== -1) return val;
    return invalidValue(cases, val);
  }

  function transformArray(typ: any, val: any): any {
    // val must be an array with no invalid elements
    if (!Array.isArray(val)) return invalidValue('array', val);
    return val.map((el) => transform(el, typ, getProps));
  }

  function transformDate(val: any): any {
    if (val === null) {
      return null;
    }
    const d = new Date(val);
    if (isNaN(d.valueOf())) {
      return invalidValue('Date', val);
    }
    return d;
  }

  function transformObject(
    props: { [k: string]: any },
    additional: any,
    val: any
  ): any {
    if (val === null || typeof val !== 'object' || Array.isArray(val)) {
      return invalidValue('object', val);
    }
    const result: any = {};
    Object.getOwnPropertyNames(props).forEach((key) => {
      const prop = props[key];
      const v = Object.prototype.hasOwnProperty.call(val, key)
        ? val[key]
        : undefined;
      result[prop.key] = transform(v, prop.typ, getProps, prop.key);
    });
    Object.getOwnPropertyNames(val).forEach((key) => {
      if (!Object.prototype.hasOwnProperty.call(props, key)) {
        result[key] = transform(val[key], additional, getProps, key);
      }
    });
    return result;
  }

  if (typ === 'any') return val;
  if (typ === null) {
    if (val === null) return val;
    return invalidValue(typ, val);
  }
  if (typ === false) return invalidValue(typ, val);
  while (typeof typ === 'object' && typ.ref !== undefined) {
    typ = typeMap[typ.ref];
  }
  if (Array.isArray(typ)) return transformEnum(typ, val);
  if (typeof typ === 'object') {
    return typ.hasOwnProperty('unionMembers')
      ? transformUnion(typ.unionMembers, val)
      : typ.hasOwnProperty('arrayItems')
      ? transformArray(typ.arrayItems, val)
      : typ.hasOwnProperty('props')
      ? transformObject(getProps(typ), typ.additional, val)
      : invalidValue(typ, val);
  }
  // Numbers can be parsed by Date but shouldn't be.
  if (typ === Date && typeof val !== 'number') return transformDate(val);
  return transformPrimitive(typ, val);
}

function cast<T>(val: any, typ: any): T {
  return transform(val, typ, jsonToJSProps);
}

function uncast<T>(val: T, typ: any): any {
  return transform(val, typ, jsToJSONProps);
}

function a(typ: any) {
  return { arrayItems: typ };
}

function u(...typs: any[]) {
  return { unionMembers: typs };
}

function o(props: any[], additional: any) {
  return { props, additional };
}

function m(additional: any) {
  return { props: [], additional };
}

function r(name: string) {
  return { ref: name };
}

const typeMap: any = {
  Welcome9: o([{ json: 'TXLife', js: 'TXLife', typ: r('TXLife') }], false),
  TXLife: o(
    [
      {
        json: 'UserAuthRequest',
        js: 'UserAuthRequest',
        typ: r('UserAuthRequest'),
      },
      { json: 'TXLifeRequest', js: 'TXLifeRequest', typ: r('TXLifeRequest') },
    ],
    false
  ),
  TXLifeRequest: o(
    [
      { json: 'TransRefGUID', js: 'TransRefGUID', typ: '' },
      { json: 'TransType', js: 'TransType', typ: '' },
      { json: 'TransExeDate', js: 'TransExeDate', typ: Date },
      { json: 'TransExeTime', js: 'TransExeTime', typ: '' },
      { json: 'TransMode', js: 'TransMode', typ: '' },
      { json: 'OLifE', js: 'OLifE', typ: r('OLIFE') },
    ],
    false
  ),
  OLIFE: o(
    [
      { json: 'Grouping', js: 'Grouping', typ: r('Grouping') },
      { json: 'SourceInfo', js: 'SourceInfo', typ: r('SourceInfo') },
      { json: 'Holding', js: 'Holding', typ: r('Holding') },
      { json: 'Party', js: 'Party', typ: a(r('Party')) },
      { json: 'Relation', js: 'Relation', typ: a(r('Relation')) },
      { json: 'FormInstance', js: 'FormInstance', typ: a(r('FormInstance')) },
    ],
    false
  ),
  FormInstance: o(
    [
      {
        json: 'FormResponse',
        js: 'FormResponse',
        typ: u(undefined, a(r('FormResponse'))),
      },
      {
        json: 'OriginalInputMode',
        js: 'OriginalInputMode',
        typ: u(undefined, ''),
      },
      {
        json: 'FormInstanceCategory',
        js: 'FormInstanceCategory',
        typ: u(undefined, ''),
      },
      {
        json: 'Attachment',
        js: 'Attachment',
        typ: u(undefined, r('Attachment')),
      },
    ],
    false
  ),
  Attachment: o(
    [
      { json: 'AttachmentBasicType', js: 'AttachmentBasicType', typ: '' },
      { json: 'Description', js: 'Description', typ: '' },
      { json: 'AttachmentData', js: 'AttachmentData', typ: '' },
      { json: 'AttachmentType', js: 'AttachmentType', typ: '' },
      { json: 'MimeTypeTC', js: 'MimeTypeTC', typ: '' },
      { json: 'TransferEncodingTypeTC', js: 'TransferEncodingTypeTC', typ: '' },
      { json: 'AttachmentLocation', js: 'AttachmentLocation', typ: '' },
      {
        json: 'SignatureInfo',
        js: 'SignatureInfo',
        typ: r('AttachmentSignatureInfo'),
      },
    ],
    false
  ),
  AttachmentSignatureInfo: o(
    [{ json: 'SignatureOK', js: 'SignatureOK', typ: '' }],
    false
  ),
  FormResponse: o(
    [
      { json: 'QuestionNumber', js: 'QuestionNumber', typ: '' },
      {
        json: 'ResponseData',
        js: 'ResponseData',
        typ: u(r('NoDriversLicenseInd'), 0),
      },
    ],
    false
  ),
  Grouping: o(
    [{ json: 'Household', js: 'Household', typ: r('Household') }],
    false
  ),
  Household: o([{ json: 'HouseholdKey', js: 'HouseholdKey', typ: 0 }], false),
  Holding: o(
    [
      { json: 'HoldingSysKey', js: 'HoldingSysKey', typ: a('') },
      { json: 'HoldingTypeCode', js: 'HoldingTypeCode', typ: '' },
      { json: 'HoldingStatus', js: 'HoldingStatus', typ: '' },
      { json: 'Policy', js: 'Policy', typ: r('Policy') },
      { json: 'Arrangement', js: 'Arrangement', typ: r('Arrangement') },
    ],
    false
  ),
  Arrangement: o(
    [
      { json: 'ProductCode', js: 'ProductCode', typ: '' },
      { json: 'ArrMode', js: 'ArrMode', typ: '' },
      { json: 'ArrType', js: 'ArrType', typ: '' },
      { json: 'ModalAmt', js: 'ModalAmt', typ: 3.14 },
      { json: 'PaymentMethod', js: 'PaymentMethod', typ: '' },
    ],
    false
  ),
  Policy: o(
    [
      { json: 'PolNumber', js: 'PolNumber', typ: 0 },
      { json: 'LineOfBusiness', js: 'LineOfBusiness', typ: '' },
      { json: 'ProductType', js: 'ProductType', typ: '' },
      { json: 'ProductCode', js: 'ProductCode', typ: 0 },
      { json: 'CarrierCode', js: 'CarrierCode', typ: '' },
      { json: 'PlanName', js: 'PlanName', typ: '' },
      { json: 'PolicyStatus', js: 'PolicyStatus', typ: '' },
      { json: 'IssueNation', js: 'IssueNation', typ: '' },
      { json: 'Jurisdiction', js: 'Jurisdiction', typ: '' },
      { json: 'EffDate', js: 'EffDate', typ: Date },
      { json: 'PaymentMode', js: 'PaymentMode', typ: '' },
      { json: 'PaymentAmt', js: 'PaymentAmt', typ: 3.14 },
      { json: 'PaymentMethod', js: 'PaymentMethod', typ: '' },
      { json: 'Life', js: 'Life', typ: r('Life') },
      {
        json: 'ApplicationInfo',
        js: 'ApplicationInfo',
        typ: r('ApplicationInfo'),
      },
    ],
    false
  ),
  ApplicationInfo: o(
    [
      { json: 'HOAssignedAppNumber', js: 'HOAssignedAppNumber', typ: '' },
      { json: 'TrackingID', js: 'TrackingID', typ: '' },
      { json: 'ApplicationType', js: 'ApplicationType', typ: '' },
      { json: 'BackDateType', js: 'BackDateType', typ: '' },
      {
        json: 'ReqPolicyDeliveryMethod',
        js: 'ReqPolicyDeliveryMethod',
        typ: '',
      },
      {
        json: 'SignatureInfo',
        js: 'SignatureInfo',
        typ: a(r('SignatureInfoElement')),
      },
      {
        json: 'OLifEExtension',
        js: 'OLifEExtension',
        typ: r('ApplicationInfoOLIFEExtension'),
      },
    ],
    false
  ),
  ApplicationInfoOLIFEExtension: o(
    [
      { json: 'AgeAndAmount', js: 'AgeAndAmount', typ: 0 },
      { json: 'OrderType', js: 'OrderType', typ: '' },
      {
        json: 'PensionersMonthly',
        js: 'PensionersMonthly',
        typ: r('AutomaticPremiumPayment'),
      },
      {
        json: 'AutomaticPremiumPayment',
        js: 'AutomaticPremiumPayment',
        typ: r('AutomaticPremiumPayment'),
      },
      { json: 'NameID', js: 'NameID', typ: '' },
      { json: 'EmployeeInd', js: 'EmployeeInd', typ: '' },
      {
        json: 'AdditionalInfo_ConcurrentApplicationYesNo',
        js: 'AdditionalInfo_ConcurrentApplicationYesNo',
        typ: r('NoDriversLicenseInd'),
      },
      {
        json: 'PIMED_VERIFY_ChangedYesNo',
        js: 'PIMED_VERIFY_ChangedYesNo',
        typ: r('NoDriversLicenseInd'),
      },
      {
        json: 'StartedInDTC',
        js: 'StartedInDTC',
        typ: r('NoDriversLicenseInd'),
      },
    ],
    false
  ),
  AutomaticPremiumPayment: o(
    [
      {
        json: 'AutomaticPremiumPayment',
        js: 'AutomaticPremiumPayment',
        typ: r('NoDriversLicenseInd'),
      },
    ],
    false
  ),
  SignatureInfoElement: o(
    [
      { json: 'SignatureRoleCode', js: 'SignatureRoleCode', typ: '' },
      { json: 'SignatureDate', js: 'SignatureDate', typ: u(undefined, Date) },
      { json: 'SignatureCity', js: 'SignatureCity', typ: u(undefined, '') },
      { json: 'SignatureState', js: 'SignatureState', typ: u(undefined, '') },
      { json: 'SubmissionType', js: 'SubmissionType', typ: '' },
      { json: 'SignatureText', js: 'SignatureText', typ: u(undefined, '') },
      {
        json: 'ElectronicAuthenticationType',
        js: 'ElectronicAuthenticationType',
        typ: u(undefined, ''),
      },
    ],
    false
  ),
  Life: o(
    [
      { json: 'InitialPremAmt', js: 'InitialPremAmt', typ: 3.14 },
      { json: 'FaceAmt', js: 'FaceAmt', typ: 0 },
      { json: 'Coverage', js: 'Coverage', typ: a(r('Coverage')) },
    ],
    false
  ),
  Coverage: o(
    [
      { json: 'PlanName', js: 'PlanName', typ: '' },
      { json: 'ProductCode', js: 'ProductCode', typ: u(0, '') },
      { json: 'IndicatorCode', js: 'IndicatorCode', typ: '' },
      { json: 'DurationDesign', js: 'DurationDesign', typ: u(undefined, 0) },
      { json: 'CurrentAmt', js: 'CurrentAmt', typ: u(0, '') },
      { json: 'InitCovAmt', js: 'InitCovAmt', typ: u(undefined, 0) },
      {
        json: 'LifeParticipant',
        js: 'LifeParticipant',
        typ: u(undefined, a(r('LifeParticipant'))),
      },
    ],
    false
  ),
  LifeParticipant: o(
    [
      { json: 'ParticipantName', js: 'ParticipantName', typ: u(undefined, '') },
      {
        json: 'LifeParticipantRoleCode',
        js: 'LifeParticipantRoleCode',
        typ: '',
      },
      { json: 'PermTableRating', js: 'PermTableRating', typ: u(undefined, '') },
      {
        json: 'UnderwritingClass',
        js: 'UnderwritingClass',
        typ: u(undefined, ''),
      },
      {
        json: 'BeneficiaryPercentDistribution',
        js: 'BeneficiaryPercentDistribution',
        typ: u(undefined, 0),
      },
      {
        json: 'DistributionOption',
        js: 'DistributionOption',
        typ: u(undefined, ''),
      },
      {
        json: 'BeneficiaryDesignation',
        js: 'BeneficiaryDesignation',
        typ: u(undefined, ''),
      },
    ],
    false
  ),
  Party: o(
    [
      { json: 'PartyTypeCode', js: 'PartyTypeCode', typ: '' },
      { json: 'FullName', js: 'FullName', typ: u(undefined, '') },
      { json: 'PartySysKey', js: 'PartySysKey', typ: u(undefined, 0) },
      { json: 'GovtID', js: 'GovtID', typ: u(undefined, 0) },
      { json: 'GovtIDTC', js: 'GovtIDTC', typ: u(undefined, '') },
      { json: 'Person', js: 'Person', typ: u(undefined, r('Person')) },
      { json: 'Address', js: 'Address', typ: u(undefined, r('Address')) },
      { json: 'Phone', js: 'Phone', typ: u(undefined, r('Phone')) },
      {
        json: 'EMailAddress',
        js: 'EMailAddress',
        typ: u(undefined, r('EMailAddress')),
      },
      {
        json: 'Employment',
        js: 'Employment',
        typ: u(undefined, r('Employment')),
      },
      { json: 'PartyKey', js: 'PartyKey', typ: u(undefined, '') },
      { json: 'ResidenceState', js: 'ResidenceState', typ: u(undefined, '') },
      { json: 'Producer', js: 'Producer', typ: u(undefined, r('Producer')) },
    ],
    false
  ),
  Address: o(
    [
      { json: 'AddressTypeCode', js: 'AddressTypeCode', typ: '' },
      { json: 'Line1', js: 'Line1', typ: u(undefined, '') },
      { json: 'Line2', js: 'Line2', typ: u(undefined, '') },
      { json: 'City', js: 'City', typ: u(undefined, '') },
      { json: 'AddressState', js: 'AddressState', typ: u(undefined, '') },
      { json: 'Zip', js: 'Zip', typ: u(undefined, 0) },
      {
        json: 'AddressCountryTC',
        js: 'AddressCountryTC',
        typ: u(undefined, ''),
      },
      { json: 'AddressStateTC', js: 'AddressStateTC', typ: u(undefined, '') },
    ],
    false
  ),
  EMailAddress: o(
    [
      { json: 'AddrLine', js: 'AddrLine', typ: '' },
      { json: 'PrefEMailAddr', js: 'PrefEMailAddr', typ: u(undefined, '') },
    ],
    false
  ),
  Employment: o([{ json: 'OccupClass', js: 'OccupClass', typ: '' }], false),
  Person: o(
    [
      { json: 'FirstName', js: 'FirstName', typ: '' },
      { json: 'MiddleName', js: 'MiddleName', typ: u(undefined, '') },
      { json: 'LastName', js: 'LastName', typ: '' },
      { json: 'Suffix', js: 'Suffix', typ: u(undefined, '') },
      { json: 'Gender', js: 'Gender', typ: u(undefined, '') },
      { json: 'BirthDate', js: 'BirthDate', typ: u(undefined, '') },
      { json: 'Age', js: 'Age', typ: u(undefined, 0) },
      { json: 'Citizenship', js: 'Citizenship', typ: u(undefined, '') },
      { json: 'Height2', js: 'Height2', typ: u(undefined, r('Eight2')) },
      { json: 'Weight2', js: 'Weight2', typ: u(undefined, r('Eight2')) },
      {
        json: 'DriversLicenseNum',
        js: 'DriversLicenseNum',
        typ: u(undefined, ''),
      },
      {
        json: 'NoDriversLicenseInd',
        js: 'NoDriversLicenseInd',
        typ: u(undefined, r('NoDriversLicenseInd')),
      },
      {
        json: 'DriversLicenseState',
        js: 'DriversLicenseState',
        typ: u(undefined, ''),
      },
      { json: 'BirthCountry', js: 'BirthCountry', typ: u(undefined, '') },
      {
        json: 'BirthJurisdictionTC',
        js: 'BirthJurisdictionTC',
        typ: u(undefined, ''),
      },
      {
        json: 'ImmigrationStatus',
        js: 'ImmigrationStatus',
        typ: u(undefined, ''),
      },
    ],
    false
  ),
  Eight2: o(
    [
      { json: 'MeasureUnits', js: 'MeasureUnits', typ: '' },
      { json: 'MeasureValue', js: 'MeasureValue', typ: 0 },
    ],
    false
  ),
  Phone: o(
    [
      { json: 'PhoneTypeCode', js: 'PhoneTypeCode', typ: '' },
      { json: 'AreaCode', js: 'AreaCode', typ: u(undefined, 0) },
      { json: 'DialNumber', js: 'DialNumber', typ: u(undefined, 0) },
      { json: 'Ext', js: 'Ext', typ: u(undefined, 0) },
    ],
    false
  ),
  Producer: o(
    [
      {
        json: 'CarrierAppointment',
        js: 'CarrierAppointment',
        typ: r('CarrierAppointment'),
      },
      {
        json: 'OLifEExtension',
        js: 'OLifEExtension',
        typ: r('ProducerOLIFEExtension'),
      },
    ],
    false
  ),
  CarrierAppointment: o(
    [{ json: 'CompanyProducerID', js: 'CompanyProducerID', typ: '' }],
    false
  ),
  ProducerOLIFEExtension: o(
    [{ json: 'UserName', js: 'UserName', typ: '' }],
    false
  ),
  Relation: o(
    [
      {
        json: 'OriginatingObjectType',
        js: 'OriginatingObjectType',
        typ: r('OriginatingObjectType'),
      },
      {
        json: 'RelatedObjectType',
        js: 'RelatedObjectType',
        typ: r('RelatedObjectType'),
      },
      { json: 'RelationRoleCode', js: 'RelationRoleCode', typ: '' },
      { json: 'InterestPercent', js: 'InterestPercent', typ: u(undefined, 0) },
      {
        json: 'RelationDescription',
        js: 'RelationDescription',
        typ: u(undefined, ''),
      },
    ],
    false
  ),
  SourceInfo: o(
    [
      { json: 'CreationDate', js: 'CreationDate', typ: Date },
      { json: 'CreationTime', js: 'CreationTime', typ: '' },
      { json: 'SourceInfoName', js: 'SourceInfoName', typ: '' },
    ],
    false
  ),
  UserAuthRequest: o(
    [
      { json: 'UserLoginName', js: 'UserLoginName', typ: '' },
      { json: 'UserPswd', js: 'UserPswd', typ: r('UserPswd') },
      { json: 'VendorApp', js: 'VendorApp', typ: r('VendorApp') },
    ],
    false
  ),
  UserPswd: o(
    [
      { json: 'CryptType', js: 'CryptType', typ: '' },
      { json: 'Pswd', js: 'Pswd', typ: '' },
    ],
    false
  ),
  VendorApp: o(
    [
      { json: 'VendorName', js: 'VendorName', typ: '' },
      { json: 'AppName', js: 'AppName', typ: '' },
    ],
    false
  ),
  NoDriversLicenseInd: ['A', 'abc', 'C', 'False', 'No', 'Yes'],
  OriginatingObjectType: ['Holding', 'Party'],
  RelatedObjectType: ['Form Instance', 'Party'],
};
