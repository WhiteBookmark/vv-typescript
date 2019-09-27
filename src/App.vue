<template>
	<v-row>
		<v-col cols="1"></v-col>
		<v-col>
			<ValidationProvider v-slot="{ errors }" rules="required|min:30">
				<v-text-field
					v-model="usernameModel"
					:error-messages="errors"
					type="text"
					name="Username"
					label="Username"
					refs="myinput"
				></v-text-field>
				<button @click="validateField()">Submit</button>
			</ValidationProvider>
		</v-col>
		<v-col cols="1"></v-col>
	</v-row>
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import { ValidationProvider } from 'vee-validate';

@Component
export default class App extends Vue {
  public usernameModel: string = 'Default';

  public $refs!: {
	myinput: InstanceType<typeof ValidationProvider>;
  };

  private async validateField() {
	// Validate the field
	const result = await this.$refs.myinput.validate();
  }
}
</script>
