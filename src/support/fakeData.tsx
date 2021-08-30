import faker from 'faker';
import { v4 as uuid } from 'uuid';
import { ResumeData } from '@/contexts/Resume';

export function generatefakeData(): ResumeData {
  return {
    name: `${faker.name.firstName()} ${faker.name.lastName()}`,
    title: faker.name.jobTitle(),
    birthDate: faker.date.past().toLocaleDateString(),
    address: faker.address.streetAddress(),
    city: faker.address.cityName(),
    zipCode: faker.address.zipCode(),
    phoneNumber: faker.phone.phoneNumber(),
    website: faker.internet.url(),
    email: faker.internet.email(),
    objectiveSummary: faker.lorem.paragraph(),
    socialNetworks: [
      {
        id: uuid(),
        name: 'facebook',
        url: faker.internet.url(),
        username: faker.internet.userName(),
      },
    ],
    workExperience: Array(3)
      .fill(null)
      .map(() => ({
        id: uuid(),
        company: faker.company.companyName(),
        position: faker.name.jobTitle(),
        website: faker.internet.url(),
        startDate: faker.date.past().toLocaleDateString(),
        endDate: faker.date.recent().toLocaleDateString(),
        summary: faker.lorem.paragraph(),
      })),
    education: Array(1)
      .fill(null)
      .map(() => ({
        id: uuid(),
        institution: faker.company.companyName(),
        fieldOfStudy: faker.lorem.word(),
        gpa: '',
        typeOfDegree: faker.lorem.word(),
        startDate: faker.date.past().toLocaleDateString(),
        endDate: faker.date.recent().toLocaleDateString(),
        summary: faker.lorem.paragraph(),
      })),
    projects: [],
    awards: [],
    certifications: [],
    skills: [],
    hobbies: [],
    languages: [],
    references: [],
  };
}
