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
  }
}

export const decorators = [
  (story, context) => ({
    template: `
      <div>
        <h1>${context.kind}</h1>
        <h2>args</h2>
        <p>${JSON.stringify(context.args)}</p>
        <h2>Reuslt</h2>
        <story />
      </div>
    `
  })
]
