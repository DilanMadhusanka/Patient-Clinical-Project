package com.auora.clinicals.Clinicals.RESTFul.API.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
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
}
