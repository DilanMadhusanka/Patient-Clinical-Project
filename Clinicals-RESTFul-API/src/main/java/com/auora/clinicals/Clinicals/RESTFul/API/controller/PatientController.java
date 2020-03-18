package com.auora.clinicals.Clinicals.RESTFul.API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.auora.clinicals.Clinicals.RESTFul.API.model.Patient;
import com.auora.clinicals.Clinicals.RESTFul.API.repos.PatientRepository;

@RestController
@RequestMapping("/api")
public class PatientController {
	
	@Autowired
	private PatientRepository repository;

	@RequestMapping(value = "/patients", method = RequestMethod.GET)
	public List<Patient> getPatient() {
		return repository.findAll();
	}
	
	@RequestMapping(value = "/patients/{id}", method = RequestMethod.GET)
	public Patient getPatient(@PathVariable("id") int id) {
		return repository.findById(id).get();
	}
	
	@RequestMapping(value = "/patients", method = RequestMethod.POST)
	public Patient savePatient(@RequestBody Patient patient) {
		return repository.save(patient);
	}
	
	@RequestMapping(value = "/patients/analysis/{id}")
	public Patient analysis(@PathVariable("id") int id) {
		Patient patient = repository.findById(id).get();
		return null;
	}
}
