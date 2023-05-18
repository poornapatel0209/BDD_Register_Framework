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
formatter.match({
  "location": "Registration.enter_an_URL()"
});
formatter.result({
  "duration": 3258512000,
  "status": "passed"
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
formatter.match({
  "location": "Registration.user_click_on_register_Link()"
});
formatter.result({
  "duration": 797573600,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_on_register_page_and_verify_register_page_title()"
});
formatter.result({
  "duration": 15148800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Poorna",
      "offset": 12
    },
    {
      "val": "Patel",
      "offset": 25
    },
    {
      "val": "Abc123@gmail.com",
      "offset": 37
    },
    {
      "val": "Abc123@",
      "offset": 60
    },
    {
      "val": "Abc123@",
      "offset": 74
    }
  ],
  "location": "Registration.user_enter_and_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 491719100,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_Register_button()"
});
formatter.result({
  "duration": 638209800,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "skipped"
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
formatter.match({
  "location": "Registration.enter_an_URL()"
});
formatter.result({
  "duration": 2237422000,
  "status": "passed"
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
formatter.match({
  "location": "Registration.user_click_on_register_Link()"
});
formatter.result({
  "duration": 839508800,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_on_register_page_and_verify_register_page_title()"
});
formatter.result({
  "duration": 11992000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Abc",
      "offset": 12
    },
    {
      "val": "Def",
      "offset": 22
    },
    {
      "val": "Abc1234@gmail.com",
      "offset": 32
    },
    {
      "val": "Abc123",
      "offset": 56
    },
    {
      "val": "Abc123",
      "offset": 69
    }
  ],
  "location": "Registration.user_enter_and_and_and_and(String,String,String,String,String)"
});
formatter.result({
  "duration": 470821600,
  "status": "passed"
});
formatter.match({
  "location": "Registration.user_click_on_Register_button()"
});
formatter.result({
  "duration": 330857500,
  "status": "passed"
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.match({
  "location": "Registration.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
});