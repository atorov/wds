export function checkEmail(email: string) {
    const errors = [];

    if (email.length === 0) {
        errors.push('Required');
    }

    if (!email.endsWith('@test.com')) {
        errors.push('Must end with @test.com');
    }

    return errors;
}

export function checkPassword(password: string) {
    const errors = [];

    if (password.length < 10) {
        errors.push('Must be at least 10 characters');
    }

    if (!password.match(/[a-z]/)) {
        errors.push('Must include at least 1 lowercase letter');
    }

    if (!password.match(/[A-Z]/)) {
        errors.push('Must include at least 1 uppercase letter');
    }

    if (!password.match(/[0-9]/)) {
        errors.push('Must include at least 1 number');
    }

    return errors;
}

export function checkCountry(country = '') {
    const errors = [];

    if (country === '') {
        errors.push('Required');
    }

    return errors;
}
