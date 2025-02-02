package com.auora.clinicals.Clinicals.RESTFul.API.repos;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.auora.clinicals.Clinicals.RESTFul.API.model.ClinicalData;

public interface ClinicalDataRepository extends JpaRepository<ClinicalData, Integer> {

	List<ClinicalData> findByPatientIdAndComponentNameOrderByMeasuredDateTime(int patientId, String componentName);

}
