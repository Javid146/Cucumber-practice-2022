$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/login.feature");
formatter.feature({
  "name": "Login",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@master"
    }
  ]
});
formatter.scenario({
  "name": "Login to the page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@master"
    }
  ]
});
formatter.step({
  "name": "I go to the website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.Login.i_go_to_the_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "web data page is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.Login.web_data_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "open add new spartan page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@master"
    },
    {
      "name": "@master"
    }
  ]
});
formatter.step({
  "name": "I click on add spartan",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.AddSpartan.i_click_on_add_spartan()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Add spartan page is displayed and spartan is created",
  "keyword": "Then "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.AddSpartan.add_spartan_page_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "several spartans at same time",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@master"
    }
  ]
});
formatter.step({
  "name": "I type \"\u003cname\u003e\", \"\u003cgender\u003e\" and \"\u003cphone\u003e\"",
  "keyword": "When "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "gender",
        "phone"
      ]
    },
    {
      "cells": [
        "Agabala",
        "male",
        "88112222221"
      ]
    },
    {
      "cells": [
        "Ag",
        "female",
        "11222234321"
      ]
    },
    {
      "cells": [
        "Sari",
        "male",
        "14344312312"
      ]
    }
  ]
});
formatter.scenario({
  "name": "several spartans at same time",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@master"
    },
    {
      "name": "@master"
    }
  ]
});
formatter.step({
  "name": "I type \"Agabala\", \"male\" and \"88112222221\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.AddSpartan.i_type_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ci class\u003d\"fas fa-user-plus\"\u003e...\u003c/i\u003e is not clickable at point (152, 10). Other element would receive the click: \u003ca class\u003d\"navbar-brand\" href\u003d\"/\"\u003e...\u003c/a\u003e\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BBPOKP5\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\mamma\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61816}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e0ff24d810e23d9663473f81496e401a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.cybertek.library.step_definitions.AddSpartan.i_type_and(AddSpartan.java:29)\r\n\tat ✽.I type \"Agabala\", \"male\" and \"88112222221\"(file:///C:/Users/mamma/IdeaProjects/2022-cucumber-project/src/test/resources/features/login.feature:17)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "several spartans at same time",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@master"
    },
    {
      "name": "@master"
    }
  ]
});
formatter.step({
  "name": "I type \"Ag\", \"female\" and \"11222234321\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.AddSpartan.i_type_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ci class\u003d\"fas fa-user-plus\"\u003e...\u003c/i\u003e is not clickable at point (152, 10). Other element would receive the click: \u003ca class\u003d\"navbar-brand\" href\u003d\"/\"\u003e...\u003c/a\u003e\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BBPOKP5\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\mamma\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61816}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e0ff24d810e23d9663473f81496e401a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.cybertek.library.step_definitions.AddSpartan.i_type_and(AddSpartan.java:29)\r\n\tat ✽.I type \"Ag\", \"female\" and \"11222234321\"(file:///C:/Users/mamma/IdeaProjects/2022-cucumber-project/src/test/resources/features/login.feature:17)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "several spartans at same time",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@master"
    },
    {
      "name": "@master"
    }
  ]
});
formatter.step({
  "name": "I type \"Sari\", \"male\" and \"14344312312\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.cybertek.library.step_definitions.AddSpartan.i_type_and(java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ci class\u003d\"fas fa-user-plus\"\u003e...\u003c/i\u003e is not clickable at point (152, 10). Other element would receive the click: \u003ca class\u003d\"navbar-brand\" href\u003d\"/\"\u003e...\u003c/a\u003e\n  (Session info: chrome\u003d100.0.4896.127)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-BBPOKP5\u0027, ip: \u0027192.168.1.110\u0027, os.name: \u0027Windows 11\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.14\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 100.0.4896.127, chrome: {chromedriverVersion: 100.0.4896.60 (6a5d10861ce8..., userDataDir: C:\\Users\\mamma\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:61816}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: e0ff24d810e23d9663473f81496e401a\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\r\n\tat com.cybertek.library.step_definitions.AddSpartan.i_type_and(AddSpartan.java:29)\r\n\tat ✽.I type \"Sari\", \"male\" and \"14344312312\"(file:///C:/Users/mamma/IdeaProjects/2022-cucumber-project/src/test/resources/features/login.feature:17)\r\n",
  "status": "failed"
});
});