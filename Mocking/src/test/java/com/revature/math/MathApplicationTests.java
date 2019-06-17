package com.revature.math;

import static org.mockito.Mockito.when;

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

@RunWith(MockitoJUnitRunner.class)
public class MathApplicationTests {
	@Mock
	private Calculator calc;

	@InjectMocks
	private MathApplication ma = new MathApplication();

	@Test
	public void meanTestOne() {
		when(calc.add(5, 10)).thenReturn(15d);
		when(calc.add(15, 20)).thenReturn(35d);
		when(calc.add(35, 15)).thenReturn(50d);
		when(calc.divide(50, 4)).thenReturn(12.5);
		
		double result = ma.mean(5, 10, 20, 15);
		Assert.assertEquals(12.5, result, 0.0);
	}
}
