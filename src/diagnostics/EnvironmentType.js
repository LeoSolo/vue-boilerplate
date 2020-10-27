import * as process from '../../.eslintrc'

export const EnvironmentType = {
  DEV: 'development',
  PROD: 'production'
}

export function getCurrentEnvironment () {
  switch (process.env.NODE_ENV) {
    case 'development': {
      return EnvironmentType.DEV
    }
    case 'production': {
      return EnvironmentType.PROD
    }
    default: {
      return EnvironmentType.DEV
    }
  }
}
