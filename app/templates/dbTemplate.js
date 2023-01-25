// 

const h_db = {
    user_id: "",
    hospital_name: "Fankyenbra Hospital",
    address: {
        country: "Ghana",
        address: "P.O.BOX KS 7162"
    },
    contact: ["0559120703", "0249744563"],
    email: "fankyenebrapower.hospital@yahoo.com",
    website: "fankyenebrahospital.com",
    profile: {
        date_generated: "02.02.2022",
        profile_image: "asset",
        name: "Anonymous User",
        gender: "Male",
        title: "Mr",
        age: "25",
        type: "",
        sponsors: [{
            name_of_provider: "National Health Insurance Scheme",
            providers_acronym: "NHIS",
            id_number: "",
            verification_tag: "verified",
        }],
        body_measurements: {
            weight: [{
                date_: "22.04.2022",
                measure: "22",
                unit: "kg",
            },],
            height: [{
                date_: "22.04.2022",
                measure: "154",
                unit: "cm",
            },]
        }
    },
    medical_folder: {
        medical_files: [{
        disease_name: "coronavirus",
        dates: {
            diagnosis_date: "23.09.2022",
            treatment_dates: {
                start: "23.09.2022",
                end_date: "30.09.2022"
            }
        },
        flag: "in process",
        attending_practisioners: [{
            name_of_practisioner: "Edna Konadu Donkoh",
            title: "Nurse",
            profile_picture: "asset",
            practisioners_notes: {
                date: "23.09.2022",
                time: "8:28 pm",
                notes: "",
            }
        }],
        diagnosis: "Coronavirus infection",
        complaints: "sore throat, cough, exhaustion, fever",
        examinations: [{body_part: "throat", e_result: "sores in throat"}],
        recommendations: "bed rest, ventilation of the room, minimization of body contact",
        drug_administered: {
            start_doses: [{
                date_: "",
                time_: "",
                drug_name: "",
                route_: "",
                dose_: {
                    amount: "",
                     unit: ""
                    },
                },
            ],
            infusions: [{date_: "", time: "", infusion: ""}],
            drugs: [
                {
                    start_date: "",
                    drug: "",
                    route_: "",
                    strength_or_freg_duration: "",
                    // seek clearance
                }
            ],
        },
        four_hour_chart: [
            {
                date: "23.09.2022",
                temperature: {
                    unit: "celcius",
                    measure: [{
                        time: "10",
                        value: "36",
                    }, {
                        time: "6",
                        value: "36.5",
                    }, {
                        time: "10",
                        value: "36.2",
                    }]
                },
                pulse_rate: {
                    unit: "",
                    measure: [{
                        time: "10",
                        value: "156",
                    }, {
                        time: "10",
                        value: "124",
                    }]
                },
                respirations: {
                    measure: [{
                        time: "10",
                        value: "28",
                    }, {
                        time: "6",
                        value: "23",
                    }]
                    
                }
    
            }
        ],
        downloadable: [
            {
                download_file: "file",
            },
        ]
    },
        ],
        analysis_files: [
            {
                analysis_name: "",
                date: {
                    registration_date: "", 
                    report_date: "",
                },
                report_flag: "",
                laboratory: {
                    name: "",
                    location: {
                        country: "Ghana",
                        address: ""
                    }
                },
                result: [
                    {
                        name: "",
                        result_observed: "",
                        flag: "", 
                        unit: "", 
                        reference_range: "", 
                        polarity: "",
                    },
                ],
                remarks: "",
                downloadable: [{
                    download_file: 'file',
                }]
            }
        ],
        referrals: [{
            referring_hospital: "",
            referred_hospital: "",
            name_of_doctor: "",
            summary_of_history: "",
            refering_diagnosis: "",
            investigations_and_management: "",
            duration_of_management: "",
            reason: "",
            signature_and_stamp: "",
            },
        ],
        documents: [{
            document_id: "",
            document: {
                name: "",
                tag: "",
                image: "",
                download_file: 'file',
                }
            }
        ],
    },

}

export default h_db;
