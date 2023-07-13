module.exports = function(RED) {
    function oauth2CredentialsNode(n) {
        RED.nodes.createNode(this,n);

        this.name = n.name || '';
      
        this.access_token_url = n.access_token_url || '';
        this.grant_type = n.grant_type || '';
        this.username = n.username || '';
        this.password = n.password || '';
        this.client_id = n.client_id || '';
        this.client_secret = n.client_secret || '';
        this.scope = n.scope || '';
        this.resource = n.resource || '';
    }
    RED.nodes.registerType("oauth2Credentials",oauth2CredentialsNode);
}