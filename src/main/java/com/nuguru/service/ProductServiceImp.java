/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nuguru.service;

/**
 *
 * @author nuguru
 */

//import com.example.exception.ResourceNotFoundException;
import com.nuguru.entities.Product;
import com.nuguru.dao.ProductRepository;
import java.util.Optional;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class ProductServiceImp implements ProductService {

    private final ProductRepository productRepository;

    public ProductServiceImp(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }

    @Override
    public Iterable<Product> getAllProducts() {
        return productRepository.findAll();
    }

    @Override
    public Optional<Product> getProduct(long id) {
        return productRepository.findById(id);
          //.orElseThrow(() -> new ResourceNotFoundException("Product not found"));
    }

    @Override
    public Product save(Product product) {
        return productRepository.save(product);
    }
}