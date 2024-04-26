export const riskClassMock = (quoteProfileData: any) => {
  return {
    trackingID: '',
    source: 'Widget',
    //Currently we are mocking "partyProfile",but need to fetch from policy holder api.
    partyProfile: {
      firstName: quoteProfileData['personalInfo.firstName'],
      lastName: quoteProfileData['personalInfo.lastName'],
      address: {
        line1: '100 Hillcrest Dr',
        city: 'Sonara',
        addressState: 'CA',
        zip: '95370',
      },
      phone: quoteProfileData['personalInfo.phoneNumber'],
      emailAddress: quoteProfileData['personalInfo.emailAddress'],
      birthDate: quoteProfileData['proposedInsured.dateOfBirth'],
      gender: quoteProfileData['proposedInsured.gender'],
      smokerStat: 1,
      buildProfile: {
        heightValue: quoteProfileData['proposedInsured.height'],
        weightValue: quoteProfileData['proposedInsured.weight'],
      },
      profileQuestions: [],
    },
    policy: {
      productType: quoteProfileData['productSettings.productType'],
      lineOfBusiness: 'LIFE',
      productCode: '9271',
      jurisdiction: 'USA_CA',
      faceAmt: quoteProfileData['coverage.faceAmount'],
    },
  };
};

export const planOptionsMock = (riskClassData: any, quoteProfileData: any) => {
  return {
    prodModel: quoteProfileData['productSettings.productType'],
    issueState: 'OLI_USA_NE',
    faceAmount: quoteProfileData['coverage.faceAmount'],
    covOption: 'BaseCovgWL',
    covType: 'BasePolicyCov_Common',
    gender: quoteProfileData['proposedInsured.gender'],
    birthDate: quoteProfileData['proposedInsured.dateOfBirth'],
    EmployeeIndicator: 'true',
    rateClass: 'PG',
    issueDate: '02-01-2020',
    tableRating: riskClassData.tableRating,
    paymentFrequency: quoteProfileData['paymentFrequency'],
    termLength: quoteProfileData['termLength'],
  };
};
