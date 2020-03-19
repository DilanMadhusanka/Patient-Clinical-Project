package com.auora.clinicals.Clinicals.RESTFul.API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.auora.clinicals.Clinicals.RESTFul.API.dto.ClinicalDataRequest;
import com.auora.clinicals.Clinicals.RESTFul.API.model.ClinicalData;
import com.auora.clinicals.Clinicals.RESTFul.API.model.Patient;
import com.auora.clinicals.Clinicals.RESTFul.API.repos.ClinicalDataRepository;
import com.auora.clinicals.Clinicals.RESTFul.API.repos.PatientRepository;

@RestController
@RequestMapping("api")
public class ClinicalDataController {

	@Autowired
	private ClinicalDataRepository clinicalDataRepository;
	@Autowired
	private PatientRepository patientRepository;

	@RequestMapping(value = "/clinicals", method = RequestMethod.POST)
	public ClinicalData saveClinicalData(@RequestBody ClinicalDataRequest request) {
		Patient patient = patientRepository.findById(request.getPatientId()).get();
		ClinicalData clinicalData = new ClinicalData();
		clinicalData.setComponentName(request.getComponentName());
		clinicalData.setComponentValue(request.getComponentValue());
		clinicalData.setPatient(patient);
		return clinicalDataRepository.save(clinicalData);
	}
	
	@RequestMapping(value = "/clinicals/{patientId}/{componentName}")
	public List<ClinicalData> getClinicalData(@PathVariable("patientId") int patientId, @PathVariable("componentName") String componentName) {
		List<ClinicalData> cliniclaData = clinicalDataRepository.findByPatientIdAndComponentNameOrderByMeasuredDateTime(patientId, componentName);
		return null;
	}
}
