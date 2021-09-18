<template>
  <v-card>
    <v-card-text>
      <v-container grid-list-md>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="Scion"
              value=""
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Commission"
              value=""
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Accessory"
              value=""
              readonly
            />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-text-field
              label="Comp Gross"
              value=""
              readonly
            />
          </v-flex>
          <v-flex md3>
            <v-select label="Gross Spiff" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Spin" />
          </v-flex>
          <v-flex md3>
            <v-select label="Spin Amt" />
          </v-flex>
        </v-layout>
        <v-layout
          row
          wrap
        >
          <v-flex md3>
            <v-switch label="Spiff" />
          </v-flex>
          <v-flex md3>
            <v-select label="Spiff Amt" />
          </v-flex>
          <v-flex md3>
            <v-switch label="Flat" />
          </v-flex>
          <v-flex md3>
            <v-text-field
              label="Total Compensation"
              value="$0.00"
              readonly
            />
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-text>
  </v-card>
</template>
