# WordPress CMS Setup Guide for NHRL

## 1. WordPress Installation

Install WordPress on your VPS:
```bash
# Install LAMP stack
sudo apt update
sudo apt install -y apache2 mysql-server php php-mysql libapache2-mod-php php-curl php-gd php-mbstring php-xml php-xmlrpc php-zip

# Download WordPress
wget https://wordpress.org/latest.tar.gz
tar -xzvf latest.tar.gz
sudo mv wordpress /var/www/html/cms
```

## 2. Required Plugins

Install these plugins via WordPress Admin > Plugins:

### Core Plugins:
- **Advanced Custom Fields PRO** - Custom fields for all post types
- **JWT Authentication for WP-API** - JWT auth for REST API
- **WP REST API** - Already included in WP core
- **Custom Post Type UI** - Create custom post types
- **Yoast SEO** - SEO meta management
- **WP Super Cache** - Performance caching
- **WP Smush** - Image optimization
- **Contact Form 7** (optional, we use custom API)

## 3. Custom Post Types to Create

Using Custom Post Type UI plugin, create:

### Products (post_type: products)
- Singular: Product
- Plural: Products
- Supports: title, editor, thumbnail, excerpt, custom-fields
- Public: Yes
- REST API: Yes (show_in_rest: true)

### Testimonials (post_type: testimonials)
- Singular: Testimonial  
- Plural: Testimonials
- Supports: title, editor, thumbnail
- Public: Yes
- REST API: Yes

### Team (post_type: team)
- Singular: Team Member
- Plural: Team Members
- Supports: title, editor, thumbnail
- Public: Yes
- REST API: Yes

### FAQs (post_type: faqs)
- Singular: FAQ
- Plural: FAQs
- Supports: title, editor
- Public: Yes
- REST API: Yes

### Certificates (post_type: certificates)
- Singular: Certificate
- Plural: Certificates
- Supports: title, editor, thumbnail
- Public: Yes
- REST API: Yes

### Careers (post_type: careers)
- Singular: Job Opening
- Plural: Job Openings
- Supports: title, editor
- Public: Yes
- REST API: Yes

### Distributors (post_type: distributors)
- Singular: Distributor
- Plural: Distributors
- Supports: title
- Public: No (private)
- REST API: Yes (with auth)

## 4. ACF Field Groups

### Product Fields (for 'products' post type):

```
Field Group: Product Details
- product_category (Taxonomy, product_categories)
- short_description (Textarea)
- composition (Textarea)
- benefits (Repeater > benefit_point: Text)
- dosage (Textarea)
- precautions (Textarea)
- storage_instructions (Textarea)
- pack_sizes (Repeater)
  - size (Text, e.g., "30ml")
  - mrp (Number)
  - sku (Text)
- availability (Select: in-stock, out-of-stock, coming-soon)
- is_featured (True/False)
- is_bestseller (True/False)
- is_new (True/False)
- brochure (File)
- gallery (Gallery)
- related_products (Relationship, post_type: products)
- seo_title (Text)
- seo_description (Textarea)
- seo_keywords (Text)
```

### Testimonial Fields:
```
- reviewer_role (Text)
- reviewer_company (Text)
- reviewer_location (Text)
- reviewer_type (Select: doctor, distributor, dealer, pharmacy, customer)
- rating (Number, min: 1, max: 5)
- is_verified (True/False)
```

### Team Member Fields:
```
- designation (Text)
- department (Text)
- linkedin_url (URL)
- email (Email)
- sort_order (Number)
```

### Certificate Fields:
```
- cert_type (Select: gmp, iso, ayush, fssai, drug-license, other)
- issuer (Text)
- issue_date (Date)
- expiry_date (Date)
- certificate_number (Text)
- certificate_pdf (File)
- description (Textarea)
```

### Career Fields:
```
- department (Text)
- location (Text)
- job_type (Select: full-time, part-time, contract, internship)
- experience_required (Text)
- qualification (Text)
- salary_range (Text)
- responsibilities (Repeater > item: Textarea)
- requirements (Repeater > item: Text)
- benefits (Repeater > item: Text)
- application_deadline (Date)
- is_active (True/False)
```

### FAQ Fields:
```
- faq_category (Text)
- sort_order (Number)
- is_active (True/False)
```

## 5. Taxonomy Setup

Create these taxonomies using Custom Post Type UI:

### Product Categories (taxonomy: product_categories)
- Post Types: products
- Show in REST API: Yes

### Product Tags (taxonomy: product_tags)
- Post Types: products
- Show in REST API: Yes

### FAQ Categories (taxonomy: faq_categories)
- Post Types: faqs
- Show in REST API: Yes

## 6. JWT Authentication Setup

In wp-config.php, add:
```php
define('JWT_AUTH_SECRET_KEY', 'your-secret-key-here');
define('JWT_AUTH_CORS_ENABLE', true);
```

In .htaccess, add:
```
RewriteRule ^index\.php$ - [L]
RewriteCond %{HTTP:Authorization} ^(.*)
RewriteRule ^(.*) - [E=HTTP_AUTHORIZATION:%1]
SetEnvIf Authorization "(.*)" HTTP_AUTHORIZATION=$1
```

## 7. REST API Permissions

Add to functions.php to allow public read access:
```php
// Allow public read for custom post types
add_filter('rest_authentication_errors', function($result) {
    if (!empty($result)) return $result;
    if (!is_user_logged_in()) return true;
    return $result;
});

// Register REST fields for ACF
add_action('rest_api_init', function() {
    // Products
    register_rest_field('products', 'acf', [
        'get_callback' => function($post) {
            return function_exists('get_fields') ? get_fields($post['id']) : [];
        }
    ]);
    
    // Add similar for other post types...
});
```

## 8. Permalink Structure

Set permalink structure to: `/%postname%/`
(WordPress Admin > Settings > Permalinks)

## 9. Sample Product Entry

After setup, add a sample product:
1. Go to Products > Add New
2. Title: "Arnica Montana 30C"
3. Excerpt: "For bruises, injuries and muscle soreness"
4. Content: (full description)
5. ACF Fields: Fill all product details
6. Featured Image: Upload product image
7. Product Category: Dilutions
8. Publish

## 10. API Endpoint Testing

Test your API:
```bash
# Get products
curl https://cms.naturalhomeoresearch.com/wp-json/wp/v2/products

# Get specific product
curl https://cms.naturalhomeoresearch.com/wp-json/wp/v2/products?slug=arnica-montana-30c

# Get categories
curl https://cms.naturalhomeoresearch.com/wp-json/wp/v2/product_categories
```
