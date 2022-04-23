package com.cybertek.library.runners;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin= {"html:target/default-cucumber-reports55",
                            "rerun:target/rerun55.txt",
                            "json:target/cucumber.json55"},

                  features="src/test/resources/features",  //path from content route
                  glue = "com/cybertek/library/step_definitions", //path from source route
                  dryRun = false,
                  tags = "@master"
)

public class CukesRunner { }
