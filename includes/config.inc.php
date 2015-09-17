<?php
require_once('../stripe/lib/Stripe.php');

$stripe = array(
  "secret_key"      => "sk_test_QZ3wxkkH3rajYdk5JTtgBDh4",
  "publishable_key" => "pk_test_HzHuGabBLWYYQW1tsc42Vq4A"
);

\Stripe\Stripe::setApiKey($stripe['secret_key']);
?>