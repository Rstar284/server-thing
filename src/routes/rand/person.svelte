<script lang="ts">
    import faker from "@faker-js/faker"
    export let address = faker.address.city() + " " + faker.address.streetAddress(true);
    export let firstName = faker.name.firstName();
    export let lastName = faker.name.lastName();
    export let name =  firstName + " " + lastName;
    export let email = faker.internet.email(firstName, lastName);
    export let pic = faker.image.avatar();
    export let phonenum = faker.phone.phoneNumber('###-###-###');
    export let company = faker.company.companyName();
    export let animal = faker.animal.type();
    export let music = faker.music.genre();
    export let time = faker.time.recent('abbr');
    export let bankAccount = faker.finance.account();
    export let job = faker.name.jobTitle();

</script>

<svelte:head>
    <title>Random - Person</title>
    <meta name="description" content="Get a AI generated person!">
</svelte:head>

<main>
    <span>
        <img src="{pic}" alt="{name}">
        <h1>{name}</h1>
    </span> 
    <h2>Address: {address}</h2>
    <h2>Phone Number: {phonenum}</h2>
    <h2>Email: {email}</h2>
    <h2>Company: {company}</h2>
    <h2>Job Title: {job}</h2>
    <h2>Bank Account: {bankAccount}</h2>
    <h2>Current Time: {time}</h2>
    <h2>Favorite Animal: {animal}</h2>
    <h2>Favorite Music Genre: {music}</h2>
</main>

<style>
    main {
        text-align: center;
    }
    main img {
        margin-top: 3rem;
        border-radius: 25%;
    }
</style>
