jest.dontMock('../build/component1.js');

describe('Component1.js test', function() {
    it(' test hello world app', function() {
        var HelloWorld = require('../build/component1.js');
        var React = require('react/addons');
        var TestUtils = React.addons.TestUtils;

        var helloApp = TestUtils.renderIntoDocument( <HelloWorld /> );

        var h1 = TestUtils.findRenderedDOMComponentWithTag(helloApp, 'h1');
        expect(h1.getDOMNode().textContent).toEqual('asd');

        TestUtils.Simulate.change(h1, {target: {value: "aaaaaa"}})
        expect(h1.getDOMNode().textContent).toEqual("aaaaaa")

        h1
    });
});