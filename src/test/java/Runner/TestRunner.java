package Runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = ".",tags = "@E2E",
        glue = {"StepDefinition"},
        format = {"pretty","html:htmlReport","json:json/cucumber.json","junit:junit/cucumber.xml"},
        dryRun = false
)
public class TestRunner {

}
