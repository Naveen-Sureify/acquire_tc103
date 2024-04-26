import { QuestionAnswerPair } from './types';

export type AcordTypeCode = string;

export enum TypeCodeKey {
  OLI_PROCINSTR_DATAEXCEPTION = 'OLI_PROCINSTR_DATAEXCEPTION',
  OLI_PROCINSTR_FULLELEC = 'OLI_PROCINSTR_FULLELEC',
  OLI_PROCINSTR_MANUALREVIEW = 'OLI_PROCINSTR_MANUALREVIEW',
  OLI_PROCINSTR_NORMAL = 'OLI_PROCINSTR_NORMAL',
  OLI_PROCINSTR_ONLYRETURNMATCH = 'OLI_PROCINSTR_ONLYRETURNMATCH',
  OLI_OTHER = 'OLI_OTHER',
  OLI_PROCINSTR_PRIORITY = 'OLI_PROCINSTR_PRIORITY',
  OLI_PROCINSTR_RECONMISMATCH = 'OLI_PROCINSTR_RECONMISMATCH',
  OLI_PROCINSTR_EXECRULES = 'OLI_PROCINSTR_EXECRULES',
  OLI_PROCINSTR_WORKFLOWPROCESS = 'OLI_PROCINSTR_WORKFLOWPROCESS',
  OLI_GENDER_FEMALE = 'OLI_GENDER_FEMALE',
  OLI_GENDER_FTMTRANS = 'OLI_GENDER_FTMTRANS',
  OLI_GENDER_INTERSEX = 'OLI_GENDER_INTERSEX',
  OLI_GENDER_COMBINED = 'OLI_GENDER_COMBINED',
  OLI_GENDER_MALE = 'OLI_GENDER_MALE',
  OLI_GENDER_MTFTRANS = 'OLI_GENDER_MTFTRANS',
  OLI_GENDER_UNISEX = 'OLI_GENDER_UNISEX',
  OLI_UNKNOWN = 'OLI_UNKNOWN',
}

export type AcordTransmissionValues = {
  request?: {
    input?: {
      txLife?: {
        TXLife?: TXLife;
      };
    };
  };
  imageInfo?: [
    {
      imageGUID?: string;
      image?: string;
    }
  ];
};

export type SureifyApplicationModel = {
  UserAuthRequest?: object;
  TXLifeRequest?: object;
  Holdings?: Holding[];
  Parties?: Party[];
  Relations?: Relation[];
  FormInstances?: FormInstance[];
};

export type TXLife = {
  productID?: any;
  UserAuthRequest?: object;
  TXLifeRequest?: object;
  OLifE?: {
    SourceInfo?: {
      CreationDate?: string;
      SourceInfoName?: string;
    };
    Holdings?: Holding[];
    Parties?: Party[];
    Relations?: Relation[];
    FormInstances?: FormInstance[];
  };
};

export type PartiesLists = {
  Insured: { [key: string]: QuestionAnswerPair[] };
  Owner: { [key: string]: QuestionAnswerPair[] };
  Beneficiary: { [key: string]: QuestionAnswerPair[] };
  Contingent: { [key: string]: QuestionAnswerPair[] };
  ChildRider: { [key: string]: QuestionAnswerPair[] };
  Physician: { [key: string]: QuestionAnswerPair[] };
  Agent: { [key: string]: QuestionAnswerPair[] };
  Carrier: { [key: string]: QuestionAnswerPair[] };
};

export type PartyQuestionAnswerPair = QuestionAnswerPair[];

export type NewParty = NewOLifEExtension & {
  PartyType?: AcordTypeCode;
  PartyTypeCode?: AcordTypeCode;
  GovtID?: string;
  GovtIDTC?: AcordTypeCode;
  EstNetWorth?: string;
  FullName?: string;
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  MarStat?: AcordTypeCode;
  Gender?: AcordTypeCode;
  BirthDate?: string;
  Age?: string;
  Height2?: string;
  Weight2?: string;
  Citizenship?: AcordTypeCode;
  EstSalary?: string;
  BirthCountry?: AcordTypeCode;
  BirthJurisdictionTC?: AcordTypeCode;
  DriversLicenseNum?: string;
  NoDriversLicenseInd?: string;
  DriversLicenseState?: string;
  RateClassAppliedFor?: string;
  PermCountry?: AcordTypeCode;
  ValidDLInd?: AcordTypeCode;
  PhysicianSpeciality: string;
  AddressTypeCode?: AcordTypeCode;
  Line1?: string;
  Line2?: string;
  City?: string;
  AddressStateTC?: AcordTypeCode;
  Zip?: string;
  AddressCountryTC?: string;
  PhoneTypeCode?: AcordTypeCode;
  AreaCode?: string;
  DialNumber?: string;
  EMailType?: AcordTypeCode;
  AddrLine?: string;
  ExistingInsuranceInd?: AcordTypeCode;
  TobaccoInd?: AcordTypeCode;
  MilitaryOrganizationType?: string;
  MilitaryStatus?: string;
  MilitarySvcRecordInd?: string;
  MilitaryRank?: string;
  OriginatingObjectType?: AcordTypeCode;
  RelatedObjectType?: AcordTypeCode;
  RelationRoleCode?: AcordTypeCode;
  RelationDescription?: AcordTypeCode;
  InterestPercent?: string;
  BeneficiaryDesignation?: AcordTypeCode;
  CompanyProducerID?: string;
  OrgForm?: AcordTypeCode;
  DBA?: string;
};

export type NewOLifEExtension = {
  ProducerOtherInsDisclosureInd?: AcordTypeCode;
  AppCompUSInd?: AcordTypeCode;
  CoveredByMedicaidInd?: AcordTypeCode;
  InitPremWireInd?: AcordTypeCode;
  IRSNoticeInd?: AcordTypeCode;
  LTCInforceInd?: AcordTypeCode;
  LTCInforce12MonthsInd?: AcordTypeCode;
  LTCReplaceInd?: AcordTypeCode;
  NIGOInd?: AcordTypeCode;
  OffPaymtForPolicyInd?: AcordTypeCode;
  OwnOffPaymtForPolicyInd?: AcordTypeCode;
  OwnPendingInsInd?: AcordTypeCode;
  OwnSameAsInsuredInd?: AcordTypeCode;
  OwnSoldTransLifePolicyInd?: AcordTypeCode;
  OwnSolicitedToSellInd?: AcordTypeCode;
  ProducerAppropSaleMatInd?: AcordTypeCode;
  ProducerSeeAllPersonsInd?: AcordTypeCode;
  ProducerTIAReceipt?: AcordTypeCode;
  SmokingInd?: AcordTypeCode;
  SoldTransLifePolicyInd?: AcordTypeCode;
  SolicitedToSellInd?: AcordTypeCode;
  ChooseNotToCompleteInd?: AcordTypeCode;
  FinRepAdvisementInd?: AcordTypeCode;
  DistChan?: AcordTypeCode;
  UnderwritingDecisionMRAS?: AcordTypeCode;
  StatutoryCompanyCode?: string;
  QuotedPremiumBasisAmt?: string;
  NLGPeriod?: AcordTypeCode;
  OneTimeInitialDraftInd?: AcordTypeCode;
  PlannedFirstYrLump?: string;
  PlannedYearlyPrem?: string;
  ZipCodeTC?: AcordTypeCode;
  SituationCode?: string;
  CommissionOptCode?: AcordTypeCode;
  BeneficiaryDistributionOption?: AcordTypeCode;
  FileName?: string;
  ReqCode?: AcordTypeCode;
  CurrentMemberInd: string;
  MembershipStatus: string;
  VIPInd: string;
  EmployeeInd: string;
  FacilityName: string;
};

export type Party = {
  PartyTypeCode?: AcordTypeCode;
  GovtID?: string;
  GovtIDTC?: AcordTypeCode;
  EstNetWorth?: string;
  FullName?: string;
  Person?: Person;
  Physician?: Physician;
  Address?: Address;
  Phone?: Phone;
  EMailAddress?: EMailAddress;
  Risk?: Risk;
  Relations?: Relation[];
  Producer?: {
    CarrierAppointment?: {
      CompanyProducerID?: string;
    };
  };
  Organization?: {
    OrgForm?: AcordTypeCode;
    DBA?: string;
  };
  OLifEExtension?: OLifEExtension;
};

export type Physician = {
  PhysicianSpeciality: string;
  PhysicianInfo?: {
    OLifEExtension: OLifEExtension;
  };
};

export type Address = {
  AddressTypeCode?: AcordTypeCode;
  Line1?: string;
  Line2?: string;
  City?: string;
  AddressStateTC?: AcordTypeCode;
  Zip?: string;
  AddressCountryTC?: string;
  OLifEExtension?: OLifEExtension;
};
export type Phone = {
  PhoneTypeCode?: AcordTypeCode;
  AreaCode?: string;
  DialNumber?: string;
};
export type EMailAddress = {
  EMailType?: AcordTypeCode;
  AddrLine?: string;
};
export type Risk = {
  ExistingInsuranceInd?: AcordTypeCode;
  TobaccoInd?: AcordTypeCode;
  MilitaryExp?: {
    MilitaryOrganizationType?: string;
    MilitaryStatus?: string;
    OLifEExtension?: {
      MilitarySvcRecordInd?: string;
      MilitaryRank?: string;
    };
  };
};

export type Relation = {
  OriginatingObjectType?: AcordTypeCode;
  RelatedObjectType?: AcordTypeCode;
  RelationRoleCode?: AcordTypeCode;
  RelationDescription?: AcordTypeCode;
  InterestPercent?: string;
  BeneficiaryDesignation?: AcordTypeCode;
  OLifEExtension?: OLifEExtension;
};

export type Person = {
  FirstName?: string;
  MiddleName?: string;
  LastName?: string;
  MarStat?: AcordTypeCode;
  Gender?: AcordTypeCode;
  BirthDate?: string;
  Age?: string;
  Height2?: string;
  Weight2?: string;
  Citizenship?: AcordTypeCode;
  EstSalary?: string;
  BirthCountry?: AcordTypeCode;
  BirthJurisdictionTC?: AcordTypeCode;
  DriversLicenseNum?: string;
  NoDriversLicenseInd?: string;
  DriversLicenseState?: string;
  OLifEExtension?: {
    PersonExtension?: {
      RateClassAppliedFor?: string;
      PermCountry?: AcordTypeCode;
      ValidDLInd?: AcordTypeCode;
    };
  };
};

export type Holding = {
  HoldingTypeCode?: AcordTypeCode;
  Policy?: Policy;
  Investment?: Investment;
  Arrangement?: Arrangement;
};

export type Policy = {
  PolNumber?: string;
  LineOfBusiness?: AcordTypeCode;
  ProductType?: AcordTypeCode;
  ProductCode?: string;
  CarrierCode?: string;
  ReplacementType?: AcordTypeCode;
  PaymentMode?: AcordTypeCode;
  PaymentAmt?: string;
  PaymentMethod?: AcordTypeCode;
  Life?: Life;
  ApplicationInfo?: ApplicationInfo;
};

export type Investment = {
  SubAccount?: {
    ProductCode?: string;
    ProductFullName?: string;
    AllocPercent?: string;
  };
};

export type Arrangement = {
  ArrType?: AcordTypeCode;
  ArrDestination?: {
    TransferAmtType?: AcordTypeCode;
    TransferPct?: string;
  };
};

export type Life = {
  QualPlanType?: AcordTypeCode;
  InitialPremAmt?: string;
  Coverage?: Coverage[];
  LifeUSA?: {
    DefLifeInsMethod?: AcordTypeCode;
    Internal1035?: AcordTypeCode;
  };
};

export type Coverage = {
  ProductCode?: string;
  ProductVersionCode?: string;
  LifeCovStatus?: AcordTypeCode;
  TobaccoPremiumBasis?: AcordTypeCode;
  IndicatorCode?: AcordTypeCode;
  LivesType?: AcordTypeCode;
  DeathBenefitOptType?: AcordTypeCode;
  CurrentAmt?: string;
  CovOptions?: CovOption[];
  LifeParticipant?: LifeParticipant[];
};

export type CovOption = {
  ProductCode?: string;
  LifeCovOptTypeCode?: AcordTypeCode;
  OLifEExtension?: OLifEExtension; // lots of weirdness here
};

export type LifeParticipant = {
  LifeParticipantRoleCode: AcordTypeCode;
  TobaccoPremiumBasis: AcordTypeCode;
  UnderwritingClass: AcordTypeCode;
};

export type ApplicationInfo = {
  ApplicationType?: AcordTypeCode;
  ApplicationJurisdiction?: AcordTypeCode;
  FormalAppInd?: AcordTypeCode;
  SignedDate?: string;
  SubmissionDate?: string;
  SubmissionTime?: string;
  SubmissionType?: AcordTypeCode;
  AppProposedInsuredSignatureOK?: AcordTypeCode;
  AppOwnerSignatureOK?: AcordTypeCode;
  AppWritingAgentSignatureOK?: AcordTypeCode;
  ReplacementInd?: AcordTypeCode;
  SignatureInfo?: {
    SignatureRoleCode?: AcordTypeCode;
    SignatureDate?: string;
    SignatureCity?: string;
    SignatureState?: AcordTypeCode;
  };
  OLifEExtension?: OLifEExtension;
};

export type OLifEExtension = {
  ApplicationInfoExtension?: {
    ProducerOtherInsDisclosureInd?: AcordTypeCode;
    AppCompUSInd?: AcordTypeCode;
    CoveredByMedicaidInd?: AcordTypeCode;
    InitPremWireInd?: AcordTypeCode;
    IRSNoticeInd?: AcordTypeCode;
    LTCInforceInd?: AcordTypeCode;
    LTCInforce12MonthsInd?: AcordTypeCode;
    LTCReplaceInd?: AcordTypeCode;
    NIGOInd?: AcordTypeCode;
    OffPaymtForPolicyInd?: AcordTypeCode;
    OwnOffPaymtForPolicyInd?: AcordTypeCode;
    OwnPendingInsInd?: AcordTypeCode;
    OwnSameAsInsuredInd?: AcordTypeCode;
    OwnSoldTransLifePolicyInd?: AcordTypeCode;
    OwnSolicitedToSellInd?: AcordTypeCode;
    ProducerAppropSaleMatInd?: AcordTypeCode;
    ProducerSeeAllPersonsInd?: AcordTypeCode;
    ProducerTIAReceipt?: AcordTypeCode;
    SmokingInd?: AcordTypeCode;
    SoldTransLifePolicyInd?: AcordTypeCode;
    SolicitedToSellInd?: AcordTypeCode;
    ChooseNotToCompleteInd?: AcordTypeCode;
    FinRepAdvisementInd?: AcordTypeCode;
    DistChan?: AcordTypeCode;
    UnderwritingDecisionMRAS?: AcordTypeCode;
  };
  PolicyExtension?: {
    StatutoryCompanyCode?: string;
    QuotedPremiumBasisAmt?: string;
    NLGPeriod?: AcordTypeCode;
    OneTimeInitialDraftInd?: AcordTypeCode;
    PlannedFirstYrLump?: string;
    PlannedYearlyPrem?: string;
  };
  AddressExtension?: {
    ZipCodeTC?: AcordTypeCode;
  };
  RelationProducerExtension?: {
    SituationCode?: string;
    CommissionOptCode?: AcordTypeCode;
  };
  RelationExtension?: {
    BeneficiaryDistributionOption?: AcordTypeCode;
  };
  AttachmentExtension?: {
    FileName?: string;
    ReqCode?: AcordTypeCode;
  };
  CurrentMemberInd: string;
  MembershipStatus: string;
  VIPInd: string;
  EmployeeInd: string;
  FacilityName: string;
};

export type FormInstance = {
  FormName?: string;
  ProviderFormNumber?: string;
  Attachment?: {
    AttachmentBasicType?: AcordTypeCode;
    AttachmentType?: AcordTypeCode;
    OLifEExtension?: OLifEExtension;
  };
};
