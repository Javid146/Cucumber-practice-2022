package com.cybertek.library.utilities;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.opera.OperaDriver;

public class Driver {
        /*Let's say there is a new class and it needs a browser. So it gets browser from TestBase
         * And TestBase gets the driver from Driver class.
         * Driver class actually created the driver.
         * Driver gets browser version from configuration.properties file using ConfigurationReader class*/
        private Driver(){}

        private static ThreadLocal<WebDriver>driverPool = new ThreadLocal<>();

        public static WebDriver getDriver(){
            if(driverPool.get()==null){
                //get the driver from properties file
                String browser = ConfigurationReader.getProperty("browser");

                switch (browser){
                    case "chrome":
                        WebDriverManager.chromedriver().setup();
                        driverPool.set(new ChromeDriver());
                        break;
                    case "chrome-headless":
                        WebDriverManager.chromedriver().setup();
                        driverPool.set(new ChromeDriver(new ChromeOptions().setHeadless(true)));
                        break;
                    case "firefox":
                        WebDriverManager.firefoxdriver().setup();
                        driverPool.set(new FirefoxDriver());
                    case"opera":
                        WebDriverManager.operadriver().setup();
                        driverPool.set(new OperaDriver());
                        break;
                } }
            return driverPool.get(); }

        public static void closeDriver(){
            if(driverPool.get() !=null){
                driverPool.get().quit();
                driverPool.remove();}
        }}
