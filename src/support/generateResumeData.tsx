import { ResumeData } from '@/entities';
import faker from 'faker';
import { v4 as uuid } from 'uuid';

export function generateResumeData(type: 'empty' | 'fake'): ResumeData {
  return type === 'fake'
    ? {
        id: uuid(),
        isActive: true,
        resumeName: '',
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
            fieldOfStudy: faker.name.jobArea(),
            gpa: '',
            typeOfDegree: faker.name.jobArea(),
            startDate: faker.date.past().toLocaleDateString(),
            endDate: faker.date.recent().toLocaleDateString(),
            summary: faker.lorem.sentence(),
          })),
        skills: Array(5)
          .fill(null)
          .map(() => ({
            id: uuid(),
            name: faker.database.column(),
            level: '',
          })),
        languages: Array(2)
          .fill(null)
          .map(() => ({
            id: uuid(),
            name: faker.lorem.word(),
            fluency: faker.lorem.word(),
          })),
        projects: [],
        awards: [],
        certifications: [],
        hobbies: [],
        references: [],
      }
    : {
        id: uuid(),
        isActive: true,
        resumeName: '',
        name: '',
        title: '',
        birthDate: '',
        address: '',
        city: '',
        zipCode: '',
        phoneNumber: '',
        website: '',
        email: '',
        socialNetworks: [],
        objectiveSummary: '',
        workExperience: [],
        education: [],
        projects: [],
        awards: [],
        certifications: [],
        skills: [],
        hobbies: [],
        languages: [],
        references: [],
      };
}
