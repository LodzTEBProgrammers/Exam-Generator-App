import rateLimit from 'express-rate-limit';

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
})


/*
Aby do końca zabezpieczyć
Zrobić wymaganie klucza API który ma znajdować się w bazie danych 
jako tabela :>


dokończyć zabezpieczenia z 
https://dev.to/tristankalos/expressjs-security-best-practices-1ja0

Użyć passportjs aby zabezpieczyć
*/

export const securityService = {
    limiter
}