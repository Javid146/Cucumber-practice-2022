package com.cybertek.library.utilities;
import java.io.FileInputStream;
import java.util.Properties;

public class ConfigurationReader {

    private static Properties properties;

    static{ //todo static block runs once and before everything.
        try {
            String path ="configuration.properties";
            //reads file in java. we need to pass the path of the file
            FileInputStream input = new FileInputStream(path);
            //initialize the object
            properties = new Properties();
            //load the contents of file to properties object
            properties.load(input);
            input.close();
        } catch (Exception e){
            e.printStackTrace();}
    }

    public static String getProperty(String keyname){ return properties.getProperty(keyname); }}
