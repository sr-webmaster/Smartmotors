import { storiesOf } from '@storybook/vue'

storiesOf('SmartMotors|Introduction', module)
  .add('Welcome', () => ({
    template: `
      <v-container>
        <v-layout column>
            <v-flex>SmartMotors's StyleGuide to ensure compliance with the Design Team and Client direction through the theming of the FreshPlatform UI</v-flex>
            <v-flex>Use the menu on the left to navigate through the available components</v-flex>                    
        </v-layout>
      </v-container>
    `
  }))
