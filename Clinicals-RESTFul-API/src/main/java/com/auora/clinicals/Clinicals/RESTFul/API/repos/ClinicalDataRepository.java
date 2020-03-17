package com.auora.clinicals.Clinicals.RESTFul.API.repos;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auora.clinicals.Clinicals.RESTFul.API.model.Clinicaldata;

public interface ClinicalDataRepository extends JpaRepository<Clinicaldata, Integer> {

}
