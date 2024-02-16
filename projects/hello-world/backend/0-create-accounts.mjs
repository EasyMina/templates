import { EasyMina } from './../../../src/EasyMina.mjs'

console.log('✨ Adding EasyMina...')
const easyMina = new EasyMina( { 'networkName': 'berkeley' } )

console.log('🔑 Creating Accounts...')
const deployers = await easyMina.createAccounts({
    'names': ['alice', 'bob', 'charlie'],
    'groupName': 'a'
})

console.log('🚀 Deployers Ready.')
