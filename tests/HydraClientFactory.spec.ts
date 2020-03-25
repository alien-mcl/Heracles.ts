import * as sinon from "sinon";
import { ApiDocumentationPolicy } from "../src/ApiDocumentationPolicy";
import HydraClientFactory from "../src/HydraClientFactory";
import { Level } from "../src/Level";
import { LinksPolicy } from "../src/LinksPolicy";

describe("Given instance of HydraClientFactory class", () => {
  beforeEach(() => {
    this.factory = HydraClientFactory.configure().withDefaults();
    this.processor = { process: sinon.stub(), supports: sinon.stub().returns(Level.FullSupport) };
    this.response = { headers: { get: sinon.stub().returns([]) } };
  });

  it("should create a client interpreting all relations as links", () => {
    expect((this.factory.withAllLinks().andCreate() as any).linksPolicy).toBe(LinksPolicy.All);
  });

  it("should create a client interpreting all HTTP related resources as links", () => {
    expect((this.factory.withAllHttpLinks().andCreate() as any).linksPolicy).toBe(LinksPolicy.AllHttp);
  });

  it("should create a client interpreting all related resources with same root URL as links", () => {
    expect((this.factory.withSameRootLinks().andCreate() as any).linksPolicy).toBe(LinksPolicy.SameRoot);
  });

  it("should create a client fetching no API documentations", () => {
    expect((this.factory.withNoApiDocumentations().andCreate() as any).apiDocumentationPolicy).toBe(
      ApiDocumentationPolicy.None
    );
  });

  it("should create a client fetching API documentations", () => {
    expect((this.factory.withApiDocumentationsFetchedOnly().andCreate() as any).apiDocumentationPolicy).toBe(
      ApiDocumentationPolicy.FetchOnly
    );
  });

  it("should create a client fetching and extending API documentations", () => {
    expect((this.factory.withApiDocumentationsFetchedAndExtended().andCreate() as any).apiDocumentationPolicy).toBe(
      ApiDocumentationPolicy.FetchAndExtend
    );
  });

  it("should create a client with custom hypermedia processor", () => {
    expect(
      this.factory
        .with(this.processor)
        .andCreate()
        .getHypermediaProcessor(this.response)
    ).toBe(this.processor);
  });
});
