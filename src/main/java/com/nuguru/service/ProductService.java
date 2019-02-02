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
import org.springframework.validation.annotation.Validated;
import com.nuguru.entities.Product;
import java.util.Optional;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;

@Validated
public interface ProductService {

    @NotNull Iterable<Product> getAllProducts();

    Optional<Product> getProduct(@Min(value = 1L, message = "Invalid product ID.") long id);

    Product save(Product product);
}
