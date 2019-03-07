import uuid from 'uuid';

export const addUser = (
    {
        name='',
        surname='',
        nationalID='',
        mobileNo='',
        email='',
        income='',
        incomeSource='',
        numberOfLoans=''
        
    } = {}
) => ({
type: 'ADD_USER',
user: {
    id: uuid(),
    name,
    surname,
    nationalID,
    mobileNo,
    email,
    income,
    incomeSource,
    numberOfLoans
}
});
