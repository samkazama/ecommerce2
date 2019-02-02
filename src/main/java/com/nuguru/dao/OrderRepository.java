/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package com.nuguru.dao;

/**
 *
 * @author nuguru
 */
import com.nuguru.entities.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends JpaRepository<Order, Long> {
}
