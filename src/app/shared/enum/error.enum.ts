export enum ErrorStauses {
    NotFound = 'dataNotFound',
    userNotFound = 'userNotFound',
    OrderNotFound = 'orderNotFound',
    MerchantNotFound = 'clientMerchantNotFound',
    AgentNotFound = 'agentNotFound',
    StaffNotFound = 'staffNotFound',
    RoleNotFound = 'roleNotFound',
    IdIsRequired = 'idIsRequired',
    DriverIdIsRequired = 'driverIdIsRequired',
    SubscriptionIsRequired = 'subscriptionIsRequired',
    AgentIdIsRequired = 'agentIdIsRequired',
    ClientIdIsRequired = 'clientIdIsRequired',
    ClientIdOrMerchantIdIsRequired = 'clientIdOrMerchantIdIsRequired',
    MerchantIdIsRequired = 'MerchantIdIsRequired',
    AllFieldsRequired = 'allFieldsAreRequired',
    SubscriptionNotFound = 'subscriptionNotFound',
    CurrencyNotFound = 'currencyNotfound',
    CargoTypeNotFound = 'cargoTypeNotfound',
    CargoStatusNotFound = 'cargoStatusNotFound',
    TransportTypeNotfound = 'transportTypeNotFound',
    TransportKindNotfound = 'transportKindNotFound',
    CargoLoadingMethodNotFound = 'cargoLoadingMethodNotFound',
    CargoPackageNotFound = 'cargoPackageNotFound',
    DriverNotFound = 'driverNotFound',
    UserTypeRequired = 'userTypeRequired',
    InvalidUserType = 'invalidUserType  ',
    SuccessfullyCreated = 'successfullyCreated',
    SuccessfullyUpdated = 'successfullyUpdated',
    SuccessfullyDeleted = 'successfullyDeleted',
    SuccessfullyCanceled = 'successfullyCanceled',
    SuccessfullyRejected = 'successfullyRejected',
    SuccessfullyBlocked = 'successfullyBlocked',
    SuccessfullyActivated = 'successfullyActivated',
    SuccessfullyVerified = 'successfullyVerified',
    CreateDataFailed = 'createFailed',
    SendCodeFailed = 'sendCodeFailed',
    UpdateDataFailed = 'updateFalied',
    DeleteDataFailed = 'deleteFalied',
    CancelDataFailed = 'cancelFalied',
    RejectDataFailed = 'rejectFalied',
    VerifyDataFailed = 'verifyFalied',
    BlockDataFailed = 'blockFalied',
    AwsStoreFileFailed = 'fileStoreFailed',
    DuplicateError = 'duplicateError',
    PhoneNumberDuplicateError = 'phoneNumberDuplicateError',
    PhoneNumbeersMustBeArray = 'phoneNumbeersMustBeArray',
    AlreadyDeleted = 'alreadyDeleted',
    AlreadyBlocked = 'alreadyBlocked',
    AlreadyActive = 'alreadyActive',
    AlreadyVerified = 'alreadyVerified',
    AlreadyAppended = 'alreadyAppended',
    AlreadyRejecteed = 'alreadyRejecteed',
    AlreadyAccepted = 'alreadyAccepted',
    DriverHasOrder = 'driverHasOrder',
    DriverArchived = 'driverArchived',
    DriverBlocked = 'driverBlocked',
    AlreadyOffered = 'alreadyOfferedToThisOrder',
    AlreadyReplied = 'alreadyRepliedToThisOffer',
    OfferLimit = 'offerLimitExceeded',
    MerchantAlreadyVerified = 'merchantAlreadyVerified',
    InternalServerError = 'internalError',
    NotModified = 'notModified',
    InvalidPassword = 'invalidPassword',
    PasswordShouldCointainNumStr = 'passwordShouldContainerNumStr',
    InvalidBankAccount = 'invalidBankAccount',
    BankAccountIsRequired = 'bankAccountIsRequired',
    FileIsRequired = 'fileIsRequired',
    DriverAlreadyAppended = 'driverAlreadyAppended',
    OfferWasRejected = 'offerWasRejected',
    OfferWasCanceled = 'offerWasCanceled',
    NotEnoughBalance = 'notEnoughBalance',
    AccessDenied = 'accessDenied',
    TokenExpired = 'tokenExpired'
  }
  