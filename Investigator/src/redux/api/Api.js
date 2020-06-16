import {STUDY_FETCH_URL, SUBJECT_FETCH_URL} from '../constants';

const patientDetails = {
  consent: {
    firstName: 'frank',
    lastName: 'johnson',
  },
  preScreening: {
    gender: 'Female',
    age: 44,
    bloodGroup: 'APositive',
    diagnosisStatus: 'Confirmed',
    undergoneSurgery: true,
    undergoneClinicalTrail: true,
  },
  clinicalCondition: {
    name: 'COPD',
    id: 1,
  },
  clinicalConditionScreenings: [
    {
      screeningResults: {
        breathingDifficultyLevel: 2,
        chestTightnessLevel: 2,
        activityLimitationLevel: 3,
        outdoorActivityLimitationLevel: 3,
        phlegmLevel: 2,
        sleepQuality: 3,
        energyLevel: 3,
      },
      screeningDate: '2020-06-09T10:00:00',
      id: 1,
      lastUpdateTime: '2020-06-09T12:36:40.7671914',
      isDeleted: false,
    },
    {
      screeningResults: {
        breathingDifficultyLevel: 3,
        chestTightnessLevel: 3,
        activityLimitationLevel: 4,
        outdoorActivityLimitationLevel: 4,
        phlegmLevel: 3,
        sleepQuality: 3,
        energyLevel: 4,
      },
      screeningDate: '2020-06-08T10:00:00',
      id: 4,
      lastUpdateTime: '2020-06-12T09:43:33.2191127',
      isDeleted: false,
    },
  ],
  vitals: [
    {
      value: 0.0,
      participant: {
        id: 1,
      },
      vital: {
        id: 1,
      },
      id: 1,
      lastUpdateTime: '2020-06-09T12:36:40.7684471',
      isDeleted: false,
    },
    {
      value: 0.0,
      participant: {
        id: 1,
      },
      vital: {
        id: 2,
      },
      id: 2,
      lastUpdateTime: '2020-06-09T12:36:40.7686162',
      isDeleted: false,
    },
  ],
  medicalRecords: [
    {
      caption: 'Arterial Blood Gas Test',
      fileType: 'text/plain',
      date: '2020-06-08T10:00:00',
      id: 1,
      lastUpdateTime: '2020-06-09T12:36:40.7732129',
      isDeleted: false,
    },
    {
      caption: 'X-ray Chest AP and Lateral',
      fileType: 'text/plain',
      date: '2020-06-12T09:43:14.2933333',
      id: 4,
      lastUpdateTime: '2020-06-12T09:43:14.2933333',
      isDeleted: false,
    },
  ],
  currentPrescription: {
    prescriptionDate: '2020-06-08T10:00:00',
    isActive: true,
    participant: {
      id: 1,
    },
    id: 4,
    lastUpdateTime: '2020-06-10T10:58:28.814584',
    isDeleted: false,
  },
  appointments: [
    {
      physician: 'Dr. Adam Scott',
      appointmentDate: '2020-06-15T00:00:00',
      appointmentTime: '16:30:00',
      physicianSpecialty: 'Dermatologist',
      location: 'Beverly Hills CA',
      participant: {
        id: 1,
      },
      appointmentType: {
        id: 2,
      },
      id: 1,
      lastUpdateTime: '2020-06-09T12:36:40.774519',
      isDeleted: false,
    },
  ],
  lastSeen: '0001-01-01T00:00:00',
  id: 1,
  lastUpdateTime: '2020-06-12T09:43:33.2189359',
  isDeleted: false,
};

const subjects = [
  {imageUrl: '', id: '1402', subTitle: 'Male, 33 Years', openIssues: 0},
  {imageUrl: '', id: '1403', subTitle: 'Male, 33 Years', openIssues: 0},
  {imageUrl: '', id: '1404', subTitle: 'Male, 33 Years', openIssues: 0},
  {imageUrl: '', id: '1405', subTitle: 'Male, 33 Years', openIssues: 0},
  {imageUrl: '', id: '1406', subTitle: 'Male, 33 Years', openIssues: 0},
  {imageUrl: '', id: '1407', subTitle: 'Male, 33 Years', openIssues: 0},
];
const timeLine = {
  lagPeriod: '1 month',
  plannedCompletion: 'Oct 2017',
  actualCompletion: 'Nov 2017',
};
const sponsor = {
  name: 'Fortius',
  contactPerson: 'Mr. Anderson',
  eCRF: '0% Completed',
};

const studyList = [
  {
    id: 'COPD1234',
    type: 'Enrolling',
    deviation: 2.3,
    subjectCount: 20,
    dropoutRate: 12,
    predictiveRate: 18,
    openIssues: 7,
    timeline: timeLine,
    sponsor: sponsor,
    status: 'green',
    subject: subjects,
  },
  {
    id: 'COPD3456',
    type: 'Enrolling',
    deviation: 2.3,
    subjectCount: 15,
    dropoutRate: 10,
    predictiveRate: 35,
    openIssues: 7,
    timeline: timeLine,
    sponsor: sponsor,
    status: 'orange',
    subject: subjects,
  },
  {
    id: 'COPD4567',
    type: 'Enrolling',
    deviation: 2.3,
    subjectCount: 10,
    dropoutRate: 10,
    predictiveRate: 27,
    openIssues: 7,
    timeline: timeLine,
    sponsor: sponsor,
    status: 'red',
    subject: subjects,
  },
];
const fetchStudies = async userId => {
  const response = await fetch(`${STUDY_FETCH_URL}`);

  const data = await response.json();

  if (data && data.error) {
    console.log('error throw');
    throw new Error(data.errors);
  }
  data.studies = studyList;
  return data.studies;
};

const fetchSubjectDetails = async subjectId => {
  const response = await fetch(`${SUBJECT_FETCH_URL}`);

  const data = await response.json();

  if (data && data.error) {
    console.log('error throw');
    throw new Error(data.errors);
  }

  data.subject = patientDetails;
  return data.subject;
};

export {fetchStudies, fetchSubjectDetails};
