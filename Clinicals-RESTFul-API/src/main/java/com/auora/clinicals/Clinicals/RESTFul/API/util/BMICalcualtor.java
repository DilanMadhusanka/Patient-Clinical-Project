package com.auora.clinicals.Clinicals.RESTFul.API.util;

import java.util.List;

import com.auora.clinicals.Clinicals.RESTFul.API.model.ClinicalData;

public class BMICalcualtor {

	public static void calculateBMI(List<ClinicalData> clinicalData, ClinicalData eachEntry) {
		if (eachEntry.getComponentName().equals("hw")) {
			String[] heightAndWeight = eachEntry.getComponentValue().split("/");
			if (heightAndWeight != null && heightAndWeight.length > 1) {
				float heightInMeter = Float.parseFloat(heightAndWeight[0]) * 0.4536F;
				float bmi = Float.parseFloat(heightAndWeight[1]) / (heightInMeter);
				ClinicalData bmiData = new ClinicalData();
				bmiData.setComponentName("bmi");
				bmiData.setComponentValue(Float.toString(bmi));
				clinicalData.add(bmiData);
			}
		}
	}
}
