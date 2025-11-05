public with sharing class accountHelper {
    @AuraEnabled(cacheable=true)
   public static List<Account> getAccounts(){
    return [SELECT Id,Name,Industry,Rating from Account with USER_MODE];
   }
}