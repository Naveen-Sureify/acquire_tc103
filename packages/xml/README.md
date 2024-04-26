# xml

This library was generated with [Nx](https://nx.dev).

## Building

Run `nx build xml` to build the library.

## Running unit tests

Run `nx test xml` to execute the unit tests via [Jest](https://jestjs.io).

## TODO

We have a set of utilities to facilitate fetching, merging, and transforming the required TCxxx data:

1. ras => Access to Questionnaire Data
2. transforms => Modify Questionnaire Data for Individual XML node mappings
3. lookups => Easy access to Accord TC codes and mappings
4. template engine => Easily generate an XML payload
5. files => Easily generate and inject documents into an XML payload (b64)

We will then be able to handle all these cases:

1. Response to any question in the questionnaire

- extractAnswer from ras utility

1. Formatting the response and filling into the node

- transforms utility

1. Lookups

- lookups utility

1. Conditional mapping (Eg: Filling info into a node based on the responses of other questions)

- extractAnswer, template engine [, transforms]

1. Value in the Database (UID, Application ID, Vendor Details, Transaction Ref IDs, App created time …)

- direct database query or parameters from requesting client

1. Handling List questions or questions with multiple sets of responses where in we need to replicate the same structure and fill in the information(Beneficiary, Party, Signature Info …)

- template engine

1. OLifeExtension -> Customised only for that client

- separate, importable template partial

1. Maintaining relationships between the Originating object and Related Object (Eg: Relationships between Party and Holdings, Beneficiary and Holdings, Party and Beneficiary …)

- template engine

1.  Adding the same set of questions info in the tag with the same xpaths (Eg: Adding questions to Form Instance) – Ex: question/answer sets from underwriting engine(s)

- template engine

1.  Encoded files (Eg: PDF files, Signature …)

- inject from files utility

TODO

- Full tc103 xml template (from BH)
- Full tc103 xml template (for Farmers)
