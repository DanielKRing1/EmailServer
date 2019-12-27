const nodemailer = require('nodemailer');

const smtpTransport = nodemailer.createTransport({
  port: 3006,
  // host: '52.52.199.187',
  // host: '127.0.0.1',
  host: 'localhost',
});

// smtpTransport.verify((error, success) => {
//   console.log('success:', success);
//   if (error) {
//     console.log(error);
//   } else {
//     console.log('Server is ready to take our messages');
//   }
// });

// Message
// const message = {
//   from: 'me@localhost.com',
//   replyTo: 'me@localhost.com',
//   to: 'me@localhost',
//   subject: 'hello',
// };

const html = `<body class="" data-url="/smtp/">
<nav id="sidebar" class="">
<div id="header-wrapper">
<div id="header">
<a id="logo" href="https://nodemailer.com">
<img src="/nm_logo_200x136.png" alt="Nodemailer">
</a>
</div>
<p>
<a href="https://outfunnel.com/?utm_source=nodemailer&amp;utm_campaign=nodemailer&amp;utm_medium=header-link">Powered by <b>Outfunnel</b></a>
</p>
</div>
<div class="highlightable ps-container ps-theme-default ps-active-y" data-ps-id="72836ad5-8127-d626-0550-7498135597d6" style="height: 417px;">
<div id="ads">
<a href="https://moonmail.io/?utm_source=nodmailer&amp;utm_campaign=nodemailer-promo" target="_blank" title="MoonMail - the easiest way to send Email Marketing Newsletters!">
<img src="https://static.moonmail.io/moonmail-promo.png" alt="MoonMail - the easiest way to send Email Marketing Newsletters!">
</a>
</div>
<ul class="topics">
<li data-nav-id="/about/" title="Nodemailer" class="dd-item
        
        
        
        ">
<a href="/about/">
<b>1. </b>Nodemailer
</a>
<ul>
<li data-nav-id="/about/migrate/" title="Migration" class="dd-item ">
<a href="/about/migrate/">
Migration
</a>
</li>
<li data-nav-id="/about/license/" title="License" class="dd-item ">
<a href="/about/license/">
License
</a>
</li>
</ul>
</li>
<li data-nav-id="/usage/" title="Usage" class="dd-item
        
        
        
        ">
<a href="/usage/">
<b>2. </b>Usage
</a>
<ul>
<li data-nav-id="/usage/why-smtp/" title="SMTP? Say what?" class="dd-item ">
<a href="/usage/why-smtp/">
SMTP? Say what?
</a>
</li>
<li data-nav-id="/usage/using-gmail/" title="Using Gmail" class="dd-item ">
<a href="/usage/using-gmail/">
Using Gmail
</a>
</li>
<li data-nav-id="/usage/bulk-mail/" title="Delivering bulk mail" class="dd-item ">
<a href="/usage/bulk-mail/">
Delivering bulk mail
</a>
</li>
</ul>
</li>
<li data-nav-id="/message/" title="Message configuration" class="dd-item
        
        
        
        ">
<a href="/message/">
<b>3. </b>Message configuration
</a>
<ul>
<li data-nav-id="/message/attachments/" title="Attachments" class="dd-item ">
<a href="/message/attachments/">
Attachments
</a>
</li>
<li data-nav-id="/message/alternatives/" title="Alternatives" class="dd-item ">
<a href="/message/alternatives/">
Alternatives
</a>
</li>
<li data-nav-id="/message/addresses/" title="Address object" class="dd-item ">
<a href="/message/addresses/">
Address object
</a>
</li>
<li data-nav-id="/message/calendar-events/" title="Calendar events" class="dd-item ">
<a href="/message/calendar-events/">
Calendar events
</a>
</li>
<li data-nav-id="/message/embedded-images/" title="Embedded images" class="dd-item ">
<a href="/message/embedded-images/">
Embedded images
</a>
</li>
<li data-nav-id="/message/list-headers/" title="List headers" class="dd-item ">
<a href="/message/list-headers/">
List headers
</a>
</li>
<li data-nav-id="/message/custom-headers/" title="Custom headers" class="dd-item ">
<a href="/message/custom-headers/">
Custom headers
</a>
</li>
<li data-nav-id="/message/custom-source/" title="Custom source" class="dd-item ">
<a href="/message/custom-source/">
Custom source
</a>
</li>
</ul>
</li>
<li data-nav-id="/smtp/" title="SMTP transport" class="dd-item         parent         active                   visited">
<a href="/smtp/">
<b>4. </b>SMTP transport
</a>
<ul>
<li data-nav-id="/smtp/envelope/" title="SMTP envelope" class="dd-item ">
<a href="/smtp/envelope/">
SMTP envelope
</a>
</li>
<li data-nav-id="/smtp/pooled/" title="Pooled SMTP" class="dd-item ">
<a href="/smtp/pooled/">
Pooled SMTP
</a>
</li>
<li data-nav-id="/smtp/testing/" title="Testing SMTP" class="dd-item ">
<a href="/smtp/testing/">
Testing SMTP
</a>
</li>
<li data-nav-id="/smtp/oauth2/" title="OAuth2" class="dd-item ">
<a href="/smtp/oauth2/">
OAuth2
</a>
</li>
<li data-nav-id="/smtp/customauth/" title="Custom authentication" class="dd-item ">
<a href="/smtp/customauth/">
Custom authentication
</a>
</li>
<li data-nav-id="/smtp/proxies/" title="Proxy support" class="dd-item ">
<a href="/smtp/proxies/">
Proxy support
</a>
</li>
<li data-nav-id="/smtp/dsn/" title="Delivery status notifications" class="dd-item ">
<a href="/smtp/dsn/">
Delivery status notifications
</a>
</li>
</ul>
</li>
<li data-nav-id="/transports/" title="Other transports" class="dd-item
        
        
        
        ">
<a href="/transports/">
<b>5. </b>Other transports
</a>
<ul>
<li data-nav-id="/transports/sendmail/" title="Sendmail transport" class="dd-item ">
<a href="/transports/sendmail/">
Sendmail transport
</a>
</li>
<li data-nav-id="/transports/ses/" title="SES transport" class="dd-item ">
<a href="/transports/ses/">
SES transport
</a>
</li>
<li data-nav-id="/transports/stream/" title="Stream transport" class="dd-item ">
<a href="/transports/stream/">
Stream transport
</a>
</li>
</ul>
</li>
<li data-nav-id="/plugins/" title="Plugins" class="dd-item
        
        
        
        ">
<a href="/plugins/">
<b>6. </b>Plugins
</a>
<ul>
<li data-nav-id="/plugins/create/" title="Create plugins" class="dd-item ">
<a href="/plugins/create/">
Create plugins
</a>
</li>
</ul>
</li>
<li data-nav-id="/dkim/" title="DKIM" class="dd-item
        
        
        
        ">
<a href="/dkim/">
<b>7. </b>DKIM
</a>
</li>
<li data-nav-id="/extras/" title="Extra modules" class="dd-item
        
        
        
        ">
<a href="/extras/">
<b>8. </b>Extra modules
</a>
<ul>
<li data-nav-id="/extras/smtp-server/" title="SMTP Server" class="dd-item  visited">
<a href="/extras/smtp-server/">
SMTP Server
</a>
</li>
<li data-nav-id="/extras/smtp-connection/" title="SMTP Connection" class="dd-item  visited">
<a href="/extras/smtp-connection/">
SMTP Connection
</a>
</li>
<li data-nav-id="/extras/mailparser/" title="Mailparser" class="dd-item  visited">
<a href="/extras/mailparser/">
Mailparser
</a>
</li>
<li data-nav-id="/extras/mailcomposer/" title="Mailcomposer" class="dd-item  visited">
<a href="/extras/mailcomposer/">
Mailcomposer
</a>
</li>
<li data-nav-id="/extras/daemons/" title="Node.js daemons" class="dd-item ">
<a href="/extras/daemons/">
Node.js daemons
</a>
</li>
</ul>
</li>
<li data-nav-id="/app/" title="NodemailerApp" class="dd-item                                     visited">
<a href="/app/">
<b>9. </b>NodemailerApp
</a>
</li>
</ul>
<section id="footer">
 <div style="text-align: center; margin-bottom:10px;">
<form action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_top">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="DB26KWR2BQX5W">
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif" border="0" name="submit" alt="PayPal - The safer, easier way to pay online!" style="display: inline">
<img alt="" border="0" src="https://www.paypalobjects.com/en_US/i/scr/pixel.gif" width="1" height="1">
</form>
</div>
</section>
<div class="ps-scrollbar-x-rail" style="left: 0px; bottom: 0px;"><div class="ps-scrollbar-x" tabindex="0" style="left: 0px; width: 0px;"></div></div><div class="ps-scrollbar-y-rail" style="top: 0px; right: 0px; height: 417px;"><div class="ps-scrollbar-y" tabindex="0" style="top: 0px; height: 166px;"></div></div></div>
</nav>
<section id="body">
<div id="overlay"></div>
<div class="padding highlightable">
<div>
<div id="top-bar-sticky-wrapper" class="sticky-wrapper is-sticky" style="height: 48px;"><div id="top-bar" style="width: 1300px; position: fixed; top: 0px; z-index: 1000;">
<div id="breadcrumbs" itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb">
<span id="sidebar-toggle-span">
<a href="#" id="sidebar-toggle" data-sidebar-toggle="" class="highlight">
<i class="fas fa-bars"></i>
</a>
</span>
<span class="links">
<a href="/" class="highlight">Nodemailer</a> &gt; SMTP transport
</span>
</div>
</div></div>
</div>
<div id="chapter">
<div id="body-inner">
<h1 id="smtp-transport">SMTP transport</h1>
<p>SMTP is the main transport in Nodemailer for delivering messages. SMTP is also the protocol used between different email hosts, so its truly universal. Almost every email delivery provider supports SMTP based sending, even if they mainly push their API based sending. APIs might have more features but using these also means vendor lock-in while in case of SMTP you only need to change the configuration options to replace one provider with another and you’re good to go.</p>
<pre><code class="language-javascript hljs"><span class="hljs-keyword">let</span> transporter = nodemailer.createTransport(options[, defaults])
</code><span class="copy-to-clipboard" title="Copy to clipboard"></span></pre>
<p>Where</p>
<ul>
<li><strong>options</strong> – is an object that defines connection data (see below for details)</li>
<li><strong>defaults</strong> – is an object that is going to be merged into every message object. This allows you to specify shared options, for example to set the same <em>from</em> address for every message</li>
</ul>
<p>Alternatively you could use a connection url instead of an object for the options. Use <em>‘smtp:’</em> or <em>‘smtps:’</em> as the protocol in the url.</p>
<pre><code class="language-javascript hljs"><span class="hljs-keyword">let</span> poolConfig = <span class="hljs-string">"smtps://username:password@smtp.example.com/?pool=true"</span>;
</code><span class="copy-to-clipboard" title="Copy to clipboard"></span></pre>
<h5 id="general-options">General options <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#general-options"><i class="fas fa-link fa-lg"></i></span></h5>
<ul>
<li><strong>port</strong> – is the port to connect to (defaults to 587 if is <em>secure</em> is <em>false</em> or 465 if <em>true</em>)</li>
<li><strong>host</strong> – is the hostname or IP address to connect to (defaults to <em>‘localhost’</em>)</li>
<li><strong>auth</strong> – defines authentication data (see <a href="#authentication" class="highlight">authentication</a> section below)</li>
<li><strong>authMethod</strong> – defines preferred authentication method, defaults to ‘PLAIN’</li>
</ul>
<div class="notices tip">
</div>
<h5 id="tls-options">TLS options <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#tls-options"><i class="fas fa-link fa-lg"></i></span></h5>
<ul>
<li><strong>secure</strong> – if <em>true</em> the connection will use TLS when connecting to server. If <em>false</em> (the default) then TLS is used if server supports the STARTTLS extension. In most cases set this value to <em>true</em> if you are connecting to port 465. For port 587 or 25 keep it <em>false</em></li>
<li><strong>tls</strong> – defines additional <a href="https://nodejs.org/api/tls.html#tls_class_tls_tlssocket" class="highlight">node.js TLSSocket options</a> to be passed to the socket constructor, eg. <em>{rejectUnauthorized: true}</em>.</li>
<li><strong>tls.servername</strong> - is optional hostname for TLS validation if <code>host</code> was set to an IP address</li>
<li><strong>ignoreTLS</strong> – if this is <em>true</em> and <em>secure</em> is false then TLS is not used even if the server supports STARTTLS extension</li>
<li><strong>requireTLS</strong> – if this is <em>true</em> and <em>secure</em> is false then Nodemailer tries to use STARTTLS even if the server does not advertise support for it. If the connection can not be encrypted then message is not sent</li>
</ul>
<div class="notices note">
Setting **secure** to **false** does not mean that you would not use an encrypted connection. Most SMTP servers allow connection upgrade via [STARTTLS](https://tools.ietf.org/html/rfc3207#section-2) command but to use this you have to connect using plaintext first
</div>
<h5 id="connection-options">Connection options <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#connection-options"><i class="fas fa-link fa-lg"></i></span></h5>
<ul>
<li><strong>name</strong> – optional hostname of the client, used for identifying to the server, defaults to hostname of the machine</li>
<li><strong>localAddress</strong> – is the local interface to bind to for network connections</li>
<li><strong>connectionTimeout</strong> – how many milliseconds to wait for the connection to establish (default is 2 minutes)</li>
<li><strong>greetingTimeout</strong> – how many milliseconds to wait for the greeting after connection is established (default is 30 seconds)</li>
<li><strong>socketTimeout</strong> – how many milliseconds of inactivity to allow (default is 10 minutes)</li>
</ul>
<h5 id="debug-options">Debug options <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#debug-options"><i class="fas fa-link fa-lg"></i></span></h5>
<ul>
<li><strong>logger</strong> – optional <a href="https://github.com/trentm/node-bunyan" class="highlight">bunyan</a> compatible logger instance. If set to <code>true</code> then logs to console. If value is not set or is <code>false</code> then nothing is logged</li>
<li><strong>debug</strong> – if set to true, then logs SMTP traffic, otherwise logs only transaction events</li>
</ul>
<h5 id="security-options">Security options <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#security-options"><i class="fas fa-link fa-lg"></i></span></h5>
<ul>
<li><strong>disableFileAccess</strong> – if true, then does not allow to use files as content. Use it when you want to use JSON data from untrusted source as the email. If an attachment or message node tries to fetch something from a file the sending returns an error</li>
<li><strong>disableUrlAccess</strong> – if true, then does not allow to use Urls as content</li>
</ul>
<h5 id="pooling-options">Pooling options <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#pooling-options"><i class="fas fa-link fa-lg"></i></span></h5>
<ul>
<li><strong>pool</strong> – see <a href="/smtp/pooled/" class="highlight">Pooled SMTP</a> for details about connection pooling</li>
</ul>
<h5 id="proxy-options">Proxy options <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#proxy-options"><i class="fas fa-link fa-lg"></i></span></h5>
<ul>
<li><strong>proxy</strong> – all SMTP based transports allow to use proxies for making TCP connections to servers. Read about proxy support in Nodemailer from <a href="/smtp/proxies/" class="highlight">here</a></li>
</ul>
<h3 id="examples">Examples <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#examples"><i class="fas fa-link fa-lg"></i></span></h3>
<h4 id="1-single-connection">1. Single connection <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#1-single-connection"><i class="fas fa-link fa-lg"></i></span></h4>
<p>This example would connect to a SMTP server separately for every single message</p>
<pre><code class="language-javascript hljs">nodemailer.createTransport({
  host: <span class="hljs-string">"smtp.example.com"</span>,
  port: <span class="hljs-number">587</span>,
  secure: <span class="hljs-literal">false</span>, <span class="hljs-comment">// upgrade later with STARTTLS</span>
  auth: {
    user: <span class="hljs-string">"username"</span>,
    pass: <span class="hljs-string">"password"</span>
  }
});
</code><span class="copy-to-clipboard" title="Copy to clipboard"></span></pre>
<h4 id="2-pooled-connections">2. Pooled connections <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#2-pooled-connections"><i class="fas fa-link fa-lg"></i></span></h4>
<p>This example would set up pooled connections against a SMTP server on port 465</p>
<pre><code class="language-javascript hljs">nodemailer.createTransport({
  pool: <span class="hljs-literal">true</span>,
  host: <span class="hljs-string">"smtp.example.com"</span>,
  port: <span class="hljs-number">465</span>,
  secure: <span class="hljs-literal">true</span>, <span class="hljs-comment">// use TLS</span>
  auth: {
    user: <span class="hljs-string">"username"</span>,
    pass: <span class="hljs-string">"password"</span>
  }
});
</code><span class="copy-to-clipboard" title="Copy to clipboard"></span></pre>
<h4 id="3-allow-self-signed-certificates">3. Allow self-signed certificates <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#3-allow-self-signed-certificates"><i class="fas fa-link fa-lg"></i></span></h4>
<p>This config would open a connection to TLS server with self-signed or invalid TLS certificate</p>
<pre><code class="language-javascript hljs">nodemailer.createTransport({
  host: <span class="hljs-string">"my.smtp.host"</span>,
  port: <span class="hljs-number">465</span>,
  secure: <span class="hljs-literal">true</span>, <span class="hljs-comment">// use TLS</span>
  auth: {
    user: <span class="hljs-string">"username"</span>,
    pass: <span class="hljs-string">"pass"</span>
  },
  tls: {
    <span class="hljs-comment">// do not fail on invalid certs</span>
    rejectUnauthorized: <span class="hljs-literal">false</span>
  }
});
</code><span class="copy-to-clipboard" title="Copy to clipboard"></span></pre>
<h2 id="authentication">Authentication <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#authentication"><i class="fas fa-link fa-lg"></i></span></h2>
<p>If authentication data is not present, the connection is considered authenticated from the start. Otherwise you would need to provide the authentication options object.</p>
<ul>
<li><p><strong>auth</strong> is the authentication object</p>
<ul>
<li><strong>type</strong> indicates the authetication type, defaults to ‘login’, other option is ‘oauth2’</li>
<li><strong>user</strong> is the username</li>
<li><strong>pass</strong> is the password for the user if normal login is used</li>
</ul></li>
</ul>
<p>For authenticating using OAuth2 instead of normal auth, see OAuth2 options for the <strong>auth</strong> object <a href="/smtp/oauth2/" class="highlight">here</a>.</p>
<p>You can also define <a href="/smtp/customauth/" class="highlight">custom authentication handlers</a> for protocols that are not natively supported by Nodemailer, see <a href="https://github.com/nodemailer/nodemailer-ntlm-auth" class="highlight">NTLM handler</a> as an example of such custom handler.</p>
<h2 id="verify-smtp-connection-configuration">Verify SMTP connection configuration <span class="anchor" data-clipboard-text="http://nodemailer.com/smtp/#verify-smtp-connection-configuration"><i class="fas fa-link fa-lg"></i></span></h2>
<p>You can verify your SMTP configuration with <strong>verify(callback)</strong> call (also works as a Promise). If it returns an error, then something is not correct, otherwise the server is ready to accept messages.</p>
<pre><code class="language-javascript hljs"><span class="hljs-comment">// verify connection configuration</span>
transporter.verify(<span class="hljs-function"><span class="hljs-keyword">function</span>(<span class="hljs-params">error, success</span>) </span>{
  <span class="hljs-keyword">if</span> (error) {
    <span class="hljs-built_in">console</span>.log(error);
  } <span class="hljs-keyword">else</span> {
    <span class="hljs-built_in">console</span>.log(<span class="hljs-string">"Server is ready to take our messages"</span>);
  }
});
</code><span class="copy-to-clipboard" title="Copy to clipboard"></span></pre>
<p>Be aware though that this call only tests connection and authentication but it does not check if the service allows you to use a specific envelope From address or not.</p>
<footer class=" footline">
</footer>
</div>
</div>
</div>
<div id="navigation">


<a class="nav nav-prev" href="/message/custom-source/" title="Custom source"> <i class="fa fa-chevron-left"></i></a>
<a class="nav nav-next" href="/smtp/envelope/" title="SMTP envelope" style="margin-right: 0px;"><i class="fa fa-chevron-right"></i></a>
</div>
</section>
<div style="left: -1000px; overflow: scroll; position: absolute; top: -1000px; border: none; box-sizing: content-box; height: 200px; margin: 0px; padding: 0px; width: 200px;">
<div style="border: none; box-sizing: content-box; height: 200px; margin: 0px; padding: 0px; width: 200px;"></div>
</div>
<script src="/js/clipboard.min.js?1576019579"></script>
<script src="/js/perfect-scrollbar.min.js?1576019579"></script>
<script src="/js/perfect-scrollbar.jquery.min.js?1576019579"></script>
<script src="/js/jquery.sticky.js?1576019579"></script>
<script src="/js/featherlight.min.js?1576019579"></script>
<script src="/js/html5shiv-printshiv.min.js?1576019579"></script>
<script src="/js/highlight.pack.js?1576019579"></script>
<script>hljs.initHighlightingOnLoad();</script>
<script src="/js/modernizr.custom.71422.js?1576019579"></script>
<script src="/js/learn.js?1576019579"></script>
<script src="/js/hugo-learn.js?1576019579"></script>
<link href="/mermaid/mermaid.css?1576019579" type="text/css" rel="stylesheet">
<script src="/mermaid/mermaid.js?1576019579"></script>
<script>
        mermaid.initialize({ startOnLoad: true });
    </script>


<img src="https://wt.outfunnel.com/l?s=eyJ2IjoieDNtaGgzM3ZmbHJkZmk2dW53bG01cCIsInMiOiJuYSIsInQiOjE1NzYxMTYzNTMzNzQsImkiOiI1YWRlMWZiNGUyOTgyZjI2MzgzMTBiMTAiLCJ1IjoiaHR0cDovL25vZGVtYWlsZXIuY29tL3NtdHAvIiwiciI6Imh0dHA6Ly9ub2RlbWFpbGVyLmNvbS9leHRyYXMvbWFpbGNvbXBvc2VyLyJ9" style="display: block; position: absolute; left: -1000px; top: -1000px" alt="" role="presentation" aria-hidden="true"></body>`;

const message = {
  from: 'sender@server.com',
  to: 'receiver@sender.com',
  subject: 'Message title',
  text: 'Plaintext version of the message',
  html: html.repeat(5),
};

console.log('Sending Mail');
// Send mail
smtpTransport.sendMail(message, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Message sent successfully!');
    console.log('Server responded with "%s"', info.response);
  }
  console.log('Closing Transport');
  smtpTransport.close();
});
