import { FlagshipContainer } from "@thinkflagship/web-shorts";
import "@thinkflagship/web-shorts/dist/styles.css";
import './App.css';

function App() {
  return (
    <div className="app">
      <FlagshipContainer>

        {/* Header */}
        <header className="header">
          <nav className="nav">
            <div className="logo">
              <h2>ShopEase</h2>
            </div>
            <ul className="nav-links">
              <li><a href="#home">Home</a></li>
              <li><a href="#products">Products</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="nav-actions">
              <button className="cart-btn">🛒 Cart (0)</button>
              <button className="login-btn">Login</button>
            </div>
          </nav>
        </header>

        {/* Hero Section */}
        <section id="home" className="hero">
          <div className="hero-content">
            <h1>Discover Amazing Products</h1>
            <p>Shop the latest trends with unbeatable prices and fast shipping</p>
            <div className="hero-buttons">
              <button className="btn-primary">Shop Now</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-placeholder">
              <div className="product-showcase">
                <div className="product-card">
                  <div className="product-image"></div>
                  <h3>Premium Headphones</h3>
                  <p>$299.99</p>
                </div>
                <div className="product-card">
                  <div className="product-image"></div>
                  <h3>Smart Watch</h3>
                  <p>$199.99</p>
                </div>
                <div className="product-card">
                  <div className="product-image"></div>
                  <h3>Wireless Speaker</h3>
                  <p>$149.99</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="features">
          <div className="container">
            <h2>Why Choose ShopEase?</h2>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">🚚</div>
                <h3>Free Shipping</h3>
                <p>Free shipping on orders over $50</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">🔒</div>
                <h3>Secure Payment</h3>
                <p>Your payment information is safe and secure</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">↩️</div>
                <h3>Easy Returns</h3>
                <p>30-day return policy for all items</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">⭐</div>
                <h3>Quality Guarantee</h3>
                <p>Only the highest quality products</p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="products">
          <div className="container">
            <h2>Featured Products</h2>
            <div className="products-grid">
              <div className="product-item">
                <div className="product-image-large"></div>
                <h3>Wireless Earbuds</h3>
                <p className="product-price">$89.99</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
              <div className="product-item">
                <div className="product-image-large"></div>
                <h3>Gaming Keyboard</h3>
                <p className="product-price">$129.99</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
              <div className="product-item">
                <div className="product-image-large"></div>
                <h3>Bluetooth Mouse</h3>
                <p className="product-price">$49.99</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
              <div className="product-item">
                <div className="product-image-large"></div>
                <h3>USB-C Hub</h3>
                <p className="product-price">$79.99</p>
                <button className="add-to-cart">Add to Cart</button>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <div className="container">
            <h2>What Our Customers Say</h2>
            <div className="testimonials-grid">
              <div className="testimonial">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Amazing quality and fast shipping! Will definitely order again."</p>
                <div className="customer">
                  <div className="customer-avatar"></div>
                  <div>
                    <h4>Sarah Johnson</h4>
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Great customer service and excellent product quality. Highly recommended!"</p>
                <div className="customer">
                  <div className="customer-avatar"></div>
                  <div>
                    <h4>Mike Chen</h4>
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
              <div className="testimonial">
                <div className="stars">⭐⭐⭐⭐⭐</div>
                <p>"Best online shopping experience I've had. Products arrived quickly and as described."</p>
                <div className="customer">
                  <div className="customer-avatar"></div>
                  <div>
                    <h4>Emily Davis</h4>
                    <span>Verified Buyer</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="cta">
          <div className="container">
            <h2>Ready to Start Shopping?</h2>
            <p>Join thousands of satisfied customers and discover amazing products today!</p>
            <button className="btn-primary large">Start Shopping Now</button>
          </div>
        </section>

        {/* Footer */}
        <footer className="footer">
          <div className="container">
            <div className="footer-content">
              <div className="footer-section">
                <h3>ShopEase</h3>
                <p>Your trusted online shopping destination for quality products at great prices.</p>
              </div>
              <div className="footer-section">
                <h4>Quick Links</h4>
                <ul>
                  <li><a href="#home">Home</a></li>
                  <li><a href="#products">Products</a></li>
                  <li><a href="#about">About</a></li>
                  <li><a href="#contact">Contact</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Customer Service</h4>
                <ul>
                  <li><a href="#">Shipping Info</a></li>
                  <li><a href="#">Returns</a></li>
                  <li><a href="#">FAQ</a></li>
                  <li><a href="#">Support</a></li>
                </ul>
              </div>
              <div className="footer-section">
                <h4>Connect</h4>
                <div className="social-links">
                  <a href="#">📘 Facebook</a>
                  <a href="#">🐦 Twitter</a>
                  <a href="#">📷 Instagram</a>
                  <a href="#">💼 LinkedIn</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>&copy; 2024 ShopEase. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </FlagshipContainer>
    </div>
  )
}

export default App
