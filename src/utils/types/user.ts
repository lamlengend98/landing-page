export interface UserInfo {
  _id: string
  username: string
  password: string
  name: string
  avatar: string
  position: string
  address: string
  email: string
  linkedln: string
  viblo: string
  skype: string
  gender: string
  birthday: string
  phone: string
  website: string
  github: string
  instagram: string
  facebook: string
  career_goal: string
  educations: Array<{
    school: string
    major: string
    gpa: string
    description: string
    startTime: string
    endTime: string
    isPresent: boolean
  }>
  experiences: Array<{
    company: string
    position: string
    description: string
    startTime: string
    endTime: string
    isPresent: boolean
  }>
  achievements: Array<{
    achievementName: string
    description: string
    startTime: string
    endTime: string
    isPresent: boolean
  }>
  projects: Array<{
    pjName: string
    link: string
    position: string
    description: string
    startTime: string
    endTime: string
    isPresent: boolean
  }>
  certificates: Array<{
    certName: string
    description: string
    startTime: string
    endTime: string
    isPresent: boolean
  }>
  languages: Array<{
    language: string
    level: number
  }>
  skills: Array<{
    skill: string
    level: number
  }>
  hobbies: Array<string>
}

export interface Resume {
  block1: {
    data: {
      name: {
        content: string
        link: string
        isItalic: boolean
        isBold: boolean
      }
      position: {
        content: string
        link: string
        isItalic: boolean
        isBold: boolean
      }
    }
    setting: ResumeSetting
  }
  block2: {
    data: {
      email: {
        content: string
        color: string
      }
      birthday: {
        content: string
        color: string
      }
      phone: {
        content: string
        color: string
      }
      address: {
        content: string
        color: string
      }
    }
    setting: ResumeSetting
  }
  block3: {
    data: {
      website: {
        content: string
        color: string
      }
      linkedln: {
        content: string
        color: string
      }
      github: {
        content: string
        color: string
      }
      viblo: {
        content: string
        color: string
      }
      instagram: {
        content: string
        color: string
      }
      skype: {
        content: string
        color: string
      }
      facebook: {
        content: string
        color: string
      }
    }
    setting: ResumeSetting
  }
  achievements: {
    data: Array<{
      achievementName: string
      description: {
        content: string
        link: string
        isItalic: boolean
        isBold: boolean
      }
      endTime: string
      isPresent: boolean
      startTime: string
    }>
    setting: ResumeSetting
  }
  avatar: {
    data: string
    setting: ResumeSetting
  }
  career_goal: {
    data: {
      content: string
      link: string
      isItalic: boolean
      isBold: boolean
    }
    setting: ResumeSetting
  }
  certificates: {
    data: Array<{
      certName: string
      description: {
        content: string
        link: string
        isItalic: boolean
        isBold: boolean
      }
      endTime: string
      isPresent: boolean
      startTime: string
    }>
    setting: ResumeSetting
  }
  createdAt: null
  educations: {
    data: Array<{
      description: {
        content: string
        link: string
        isItalic: boolean
        isBold: boolean
      }
      endTime: string
      gpa: string
      isPresent: boolean
      major: string
      school: string
      startTime: string
    }>
    setting: ResumeSetting
  }
  experiences: {
    data: Array<{
      company: string
      description: {
        content: string
        link: string
        isItalic: boolean
        isBold: boolean
      }
      endTime: string
      isPresent: boolean
      position: string
      startTime: string
    }>
    setting: ResumeSetting
  }
  hobbies: {
    data: Array<string>
    setting: ResumeSetting
  }
  languages: {
    setting: ResumeSetting
    data: Array<{
      language: string
      level: string
    }>
  }
  projects: {
    data: Array<{
      description: {
        content: string
        link: string
        isItalic: boolean
        isBold: boolean
      }
      endTime: string
      isPresent: boolean
      link: string
      pjName: string
      position: string
      startTime: string
    }>
    setting: ResumeSetting
  }
  skills: {
    setting: ResumeSetting
    data: Array<{
      level: string
      skill: string
    }>
  }
}

interface ResumeSetting {
  color: string
  theme: number
  isShow: boolean
}
