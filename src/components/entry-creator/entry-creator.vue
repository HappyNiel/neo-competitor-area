<template>
    <div id="EntryCreatorComponent">
        <h2>Create a new entry</h2>
        <b-card>
            <b-form>
                <b-card
                    header="Entry information"
                    header-text-variant="white"
                    header-bg-variant="secondary">
                    <b-form-group
                        label="Entry name"
                        label-for="EntryName"
                        description="Please write down the official team name. This can be the same for multiple entries of your team.">
                        <b-form-input
                            id="EntryName"
                            type="text"
                            v-model="entryForm.name"
                            required>
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Entry identifier"
                        label-for="EntryIdentifier"
                        description="Please enter here what the team name identifier is within iRacing when having multiple entries (e.g. colors, numbers, etc).">
                        <b-form-input
                            id="EntryIdentifier"
                            type="text"
                            v-model="entryForm.entryIdentifier">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Entry nationality"
                        label-for="EntryNationality"
                        description="Two letter country code">
                        <b-form-input
                            id="EntryNationality"
                            type="text"
                            v-model="entryForm.nationality">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Entry ID"
                        label-for="EntryID"
                        description="This can be added later.">
                        <b-form-input
                            id="EntryID"
                            type="text"
                            v-model="entryForm.id">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Requested car number"
                        label-for="EntryCarNumber">
                        <b-form-input
                            id="EntryCarNumber"
                            type="number"
                            v-model="entryForm.carNumber"
                            min="1"
                            max="999"
                            required>
                        </b-form-input>
                    </b-form-group>
                </b-card>
                <!-- <b-card
                    header="Invoice information"
                    header-text-variant="white"
                    header-bg-variant="secondary">
                    <h3>TBD</h3>
                </b-card> -->
                <b-card
                    header="Additional information"
                    header-text-variant="white"
                    header-bg-variant="secondary">
                    <b-form-group
                        label="Entry website"
                        label-for="EntryWebsite">
                        <b-form-input
                            id="EntryWebsite"
                            type="url"
                            v-model="entryForm.website">
                        </b-form-input>
                    </b-form-group>
                    <b-form-group
                        label="Entry Twitter handle"
                        label-for="EntryTwitter">
                        <b-input-group prepend="@">
                            <b-form-input
                                id="EntryTwitter"
                                type="text"
                                v-model="entryForm.twitter">
                            </b-form-input>
                        </b-input-group>
                    </b-form-group>
                </b-card>
                <!-- <b-card
                    header="Driver line-up"
                    header-text-variant="white"
                    header-bg-variant="secondary">
                    <h3>TBD</h3>
                </b-card> -->

                <b-button v-b-modal.EntryFormConfirmation variant="primary">Create entry</b-button>
            </b-form>
        </b-card>

        <b-modal 
            id="EntryFormConfirmation"
            title="Confirm entry"
            size="lg"
            @ok="onSubmit">
            <b-card
                header="Entry information"
                header-text-variant="white"
                header-bg-variant="secondary">
                <b-row>
                    <b-col>Name:</b-col>
                    <b-col>{{ entryForm.name }}</b-col>
                </b-row>
                <b-row>
                    <b-col>Identifier:</b-col>
                    <b-col>{{ entryForm.entryIdentifier }}</b-col>
                </b-row>
                <b-row>
                    <b-col>Nationality:</b-col>
                    <b-col>{{ entryForm.nationality }}</b-col>
                </b-row>
                <b-row>
                    <b-col>iRacing team ID:</b-col>
                    <b-col>{{ entryForm.id }}</b-col>
                </b-row>
                <b-row>
                    <b-col>Requested car number:</b-col>
                    <b-col>{{ entryForm.carNumber }}</b-col>
                </b-row>
            </b-card>
            <b-card
                header="Additional information"
                header-text-variant="white"
                header-bg-variant="secondary">
                <b-row>
                    <b-col>Website:</b-col>
                    <b-col>{{ entryForm.website }}</b-col>
                </b-row>
                <b-row>
                    <b-col>Twitter handle:</b-col>
                    <b-col>{{ entryForm.twitter }}</b-col>
                </b-row>
            </b-card>
        </b-modal>
    </div>
</template>

<script lang="ts" src="./entry-creator.ts"></script>
