import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'

export const parameters = {
  viewport: {
    viewports: INITIAL_VIEWPORTS
  },
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#ffffff'
      },
      {
        name: 'twitter',
        value: '#00aced'
      },
      {
        name: 'facebook',
        value: '#3b5998'
      }
    ]
  },
  layout: 'centered'  //centerd, fullscreen, padding(default)
}

export const decorators = [
  (story, context) => ({
    props: {
      padding: {
        type: String,
        default: context.globals.padding
      }
    },
    template: `
      <div :style="{padding: padding}">
        <story />
      </div>
    `
  })
]

export const globalTypes = {
  padding: {
    name: 'Padding',
    description: 'ストーリー描画時のpaddingを設定します',
    defaultValue: '0px',
    toolbar: {
      icon: 'circlehollow',
      items: ['0px', '30px', '100px']
    }
  }
}
