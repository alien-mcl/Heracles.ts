import * as sinon from "sinon";
/* tslint:disable:max-line-length */
import EntryPointCorrectingGraphTransformer from "../../../src/JsonLd/GraphTransformations/EntryPointCorrectingGraphTransformer";
import { hydra } from "../../../src/namespaces";
import { returnOk } from "../../../testing/ResponseHelper";

describe("Given instance of EntryPointCorrectingGraphTransformer class", () => {
  beforeEach(() => {
    this.entryPoint = { "@id": "http://temp.uri/" };
    this.apiDocumentation = { "@id": "http://temp.uri/#documentation", "@type": [hydra.ApiDocumentation] };
    this.graph = [this.apiDocumentation];
    this.options = {
      auxiliaryOriginalUrl: "http://temp.uri/",
      auxiliaryResponse: returnOk("http://temp.uri/", this.entryPoint)
    };
    this.processor = { supports: sinon.stub().returns(true) };
    this.transformer = new EntryPointCorrectingGraphTransformer();
  });

  describe("when transforming", () => {
    beforeEach(() => {
      this.transformer.transform(this.graph, this.processor, this.options);
    });

    it("should check processor supports the initial request", () => {
      expect(this.processor.supports).toHaveBeenCalledWith(this.options.auxiliaryResponse);
    });

    it("should setup an entrypoint", () => {
      expect(this.apiDocumentation[hydra.entrypoint][0]["@id"]).toBe("http://temp.uri/");
    });
  });
});
