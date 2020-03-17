package com.auora.clinicals.Clinicals.RESTFul.API.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auora.clinicals.Clinicals.RESTFul.API.model.Patient;

public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
