/* tslint:disable:object-literal-sort-keys */
const hydraNamespace = "http://www.w3.org/ns/hydra/core#";
export let hydra = {
  namespace: hydraNamespace,

  entrypoint: hydraNamespace + "entrypoint",
  description: hydraNamespace + "description",
  title: hydraNamespace + "title",
  apiDocumentation: hydraNamespace + "apiDocumentation",
  supportedClass: hydraNamespace + "supportedClass",
  ApiDocumentation: hydraNamespace + "ApiDocumentation",
  EntryPoint: hydraNamespace + "EntryPoint",

  headerName: hydraNamespace + "headerName",
  mapping: hydraNamespace + "mapping",
  template: hydraNamespace + "template",
  variable: hydraNamespace + "variable",
  variableRepresentation: hydraNamespace + "variableRepresentation",
  property: hydraNamespace + "property",
  BasicRepresentation: hydraNamespace + "BasicRepresentation",
  IriTemplate: hydraNamespace + "IriTemplate",
  IriTemplateMapping: hydraNamespace + "IriTemplateMapping",
  HeaderTemplate: hydraNamespace + "HeaderTemplate,",
  TemplatedLink: hydraNamespace + "TemplatedLink",
  Link: hydraNamespace + "Link",
  VariableRepresentation: hydraNamespace + "VariableRepresentation",
  Template: hydraNamespace + "Template",

  collection: hydraNamespace + "collection",
  member: hydraNamespace + "member",
  manages: hydraNamespace + "manages",
  totalItems: hydraNamespace + "totalItems",
  Collection: hydraNamespace + "Collection",
  CollectionSpecification: hydraNamespace + "CollectionSpecification",
  PartialCollectionView: hydraNamespace + "PartialCollectionView",

  supportedOperation: hydraNamespace + "supportedOperation",
  supportedProperty: hydraNamespace + "supportedProperty",
  readable: hydraNamespace + "readable",
  required: hydraNamespace + "required",
  writeable: hydraNamespace + "writeable",
  Class: hydraNamespace + "Class",
  SupportedProperty: hydraNamespace + "SupportedProperty",

  method: hydraNamespace + "method",
  expects: hydraNamespace + "expects",
  returns: hydraNamespace + "returns",
  expectsHeader: hydraNamespace + "expectsHeader",
  returnsHeader: hydraNamespace + "returnsHeader",
  possibleStatus: hydraNamespace + "possibleStatus",
  target: hydraNamespace + "target",
  Operation: hydraNamespace + "Operation",
  Status: hydraNamespace + "Status",

  operation: hydraNamespace + "operation",
  Resource: hydraNamespace + "Resource",

  first: hydraNamespace + "first",
  freetextQuery: hydraNamespace + "freetextQuery",
  next: hydraNamespace + "next",
  previous: hydraNamespace + "previous",
  last: hydraNamespace + "last",
  search: hydraNamespace + "search",
  view: hydraNamespace + "view",
  subject: hydraNamespace + "subject",
  object: hydraNamespace + "object",

  skip: hydraNamespace + "skip",
  take: hydraNamespace + "take",
  page: hydraNamespace + "page"
};

const rdfNamespace = "http://www.w3.org/1999/02/22-rdf-syntax-ns#";
export let rdf = {
  namespace: rdfNamespace,

  Property: rdfNamespace + "Property"
};

const rdfsNamespace = "http://www.w3.org/2000/01/rdf-schema#";
export let rdfs = {
  namespace: rdfsNamespace,

  comment: rdfsNamespace + "comment",
  domain: rdfsNamespace + "domain",
  label: rdfsNamespace + "label",
  range: rdfsNamespace + "range"
};

const schemaDotOrgNamespace = "http://schema.org/";
export let schemaDotOrg = {
  namespace: schemaDotOrgNamespace,

  rangeIncludes: schemaDotOrgNamespace + "rangeIncludes",
  domainIncludes: schemaDotOrgNamespace + "domainIncludes"
};
