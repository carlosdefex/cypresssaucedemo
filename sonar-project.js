// eslint-disable-next-line import/no-extraneous-dependencies
const scanner = require('sonarqube-scanner').default;

scanner(
        {
            serverUrl: 'http://localhost:9000',
            options: {
                'sonar.scm.provider': 'git'
            },
        },
        error => {
            if (error) {
                console.error(error);
            }
            process.exit();
        },
).then(r => {
    console.log('Sonarqube analysis finished');
});
