package com.pafprj.Healthcare;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

public class StaffRepository {
	
	Connection con = null;
	
	public StaffRepository(){
		
		String db = "jdbc:mysql://localhost:3306/healthcare?serverTimezone=UTC";
		String username ="root";
		String password ="";
		try {
			Class.forName("com.mysql.cj.jdbc.Driver");
			con = DriverManager.getConnection(db, username, password);
		} catch (Exception e) {
			System.out.println("Connection " +e);
		}
		
		
	}
	
	
	public List <Staff> getstaff(){
		List<Staff> staff = new ArrayList<>();
		String sql = "SELECT * from staff";
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			while(rs.next()) {
				Staff s = new Staff();
				s.seteId(rs.getString(1));
				s.setName(rs.getString(2));
				s.setAge(rs.getInt(3));
				s.setGender(rs.getString(4));
				s.setNic(rs.getString(5));
				s.setAddress(rs.getString(6));
				s.setEmail(rs.getString(7));
				s.setType(rs.getBoolean(8));
				
				staff.add(s);
			}
		} catch (Exception e) {
			System.out.println("Get staff" +e);
		}
		
		return staff;
		
	}
	
	
	public Staff getMember(int id) {
		
		
		String sql = "SELECT * from staff WHERE id="+id;
		
		Staff s = new Staff();
		try {
			Statement st = con.createStatement();
			ResultSet rs = st.executeQuery(sql);
			if(rs.next()) {
				
				s.seteId(rs.getString(1));
				s.setName(rs.getString(2));
				s.setAge(rs.getInt(3));
				s.setGender(rs.getString(4));
				s.setNic(rs.getString(5));
				s.setAddress(rs.getString(6));
				s.setEmail(rs.getString(7));
				s.setType(rs.getBoolean(8));
			
				
				
			}
		} 
		catch (Exception e)
		{
			System.out.println("Get member" + e);
		}
		return s;
	}
	
	
	
	public void createMember(Staff s1) {
		String sql = "insert into staff (id,name,age,gender,nic,Address,email,type) values (?,?,?,?,?,?,?,?)";
		try {
			PreparedStatement st = con.prepareStatement(sql);
			
			
			st.setString(1, s1.geteId());
			st.setString(2, s1.getName());
			st.setInt(3, s1.getAge());
			st.setString(4,s1.getGender());
			st.setString(5,s1.getNic());
			st.setString(6,s1.getAddress());
			st.setString(7, s1.getEmail());
			st.setBoolean(8, s1.isType());
			
			st.executeUpdate();
		} 
		catch (Exception e)
		{
			System.out.println("Creatememeber "+ e);
		}
	}
	
	
	public void updateMember(Staff s1) {
		String sql = "update staff set name=?,age=?,gender=?,nic=?,Address=?,email=?,type=? WHERE id=?";
		try {
			PreparedStatement st = con.prepareStatement(sql);
			
			
			
			st.setString(1, s1.getName());
			st.setInt(2, s1.getAge());
			st.setString(3,s1.getGender());
			st.setString(4,s1.getNic());
			st.setString(5,s1.getAddress());
			st.setString(6, s1.getEmail());
			st.setBoolean(7, s1.isType());
			st.setString(8, s1.geteId());
			
			st.executeUpdate();
			
		} 
		catch (Exception e)
		{
			System.out.println("Updatetememeber "+ e);
			
		}
	}
	
	public void deleteMember(int id) {
		String sql = "DELETE from staff WHERE id=?";
		
		try {
			
			PreparedStatement st = con.prepareStatement(sql);
			st.setInt(1, id);
			st.executeUpdate();
		}
		catch (Exception e) 
		{
			
			System.out.println(e);
		}
	}
	
	
	
	
	

}
