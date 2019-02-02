package com.nuguru;

import com.nuguru.entities.Client;
import com.nuguru.entities.Product;
import com.nuguru.service.ClientService;
import com.nuguru.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class EcommerceApplication implements CommandLineRunner {
    
        @Autowired
        ClientService cltservice;
        ProductService productService;
	public static void main(String[] args) {
		SpringApplication.run(EcommerceApplication.class, args);
	}
        @Override
    public void run(String... args) throws Exception {
//        cltservice.save(new Client(1L,"nada","ed","ed@gmail.com","testeu Adress","tangier","credit card","visa",3L,2020,3454,4L));
//           productService.save(new Product(1L, "TV Set", 300.00, "http://placehold.it/200x100"));
//            productService.save(new Product(2L, "Game Console", 200.00, "http://placehold.it/200x100"));
//            productService.save(new Product(3L, "Sofa", 100.00, "http://placehold.it/200x100"));
//            productService.save(new Product(4L, "Icecream", 5.00, "http://placehold.it/200x100"));
//            productService.save(new Product(5L, "Beer", 3.00, "http://placehold.it/200x100"));
//            productService.save(new Product(6L, "Phone", 500.00, "http://placehold.it/200x100"));
//            productService.save(new Product(7L, "Watch", 30.00, "http://placehold.it/200x100"));

//            productService.getAllProducts().forEach(a->{
//            System.out.println(a.getName());
//        });
            System.out.println("---------------------------------");
           cltservice.getAllClients().forEach(a->{
            System.out.println(a.getFirstName());
        });
    }     

}

