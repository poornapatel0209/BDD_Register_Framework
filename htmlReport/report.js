$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Features/Register.feature");
formatter.feature({
  "line": 1,
  "name": "NopCommerce Register",
  "description": "",
  "id": "nopcommerce-register",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 7,
  "name": "Nopcommerce Valid Register Test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on register Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User on register page and verify register page title",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter \"\u003cFirstname\u003e\" and \"\u003cLastname\u003e\" and \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\" and \"\u003cConformPassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on home page and verify Home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 14,
  "name": "",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test;",
  "rows": [
    {
      "cells": [
        "Firstname",
        "Lastname",
        "Email",
        "Password",
        "ConformPassword"
      ],
      "line": 15,
      "id": "nopcommerce-register;nopcommerce-valid-register-test;;1"
    },
    {
      "cells": [
        "Poorna",
        "Patel",
        "Abc123@gmail.com",
        "Abc123@",
        "Abc123@"
      ],
      "line": 16,
      "id": "nopcommerce-register;nopcommerce-valid-register-test;;2"
    },
    {
      "cells": [
        "Abc",
        "Def",
        "Abc1234@gmail.com",
        "Abc123",
        "Abc123"
      ],
      "line": 17,
      "id": "nopcommerce-register;nopcommerce-valid-register-test;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.background({
  "line": 3,
  "name": "User able to open Browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Enter an URL",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 16,
  "name": "Nopcommerce Valid Register Test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on register Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User on register page and verify register page title",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter \"Poorna\" and \"Patel\" and \"Abc123@gmail.com\" and \"Abc123@\" and \"Abc123@\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on home page and verify Home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.background({
  "line": 3,
  "name": "User able to open Browser",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 4,
  "name": "Enter an URL",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "line": 17,
  "name": "Nopcommerce Valid Register Test",
  "description": "",
  "id": "nopcommerce-register;nopcommerce-valid-register-test;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 5,
      "name": "@E2E"
    }
  ]
});
formatter.step({
  "line": 8,
  "name": "User click on register Link",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "User on register page and verify register page title",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "User enter \"Abc\" and \"Def\" and \"Abc1234@gmail.com\" and \"Abc123\" and \"Abc123\"",
  "matchedColumns": [
    0,
    1,
    2,
    3,
    4
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 11,
  "name": "User click on Register button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User is on home page and verify Home page title",
  "keyword": "Then "
});
formatter.step({
  "line": 13,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});